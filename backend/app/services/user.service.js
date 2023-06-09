const bcrypt = require('bcryptjs');
const { ObjectId } = require("mongodb");
const salt = bcrypt.genSaltSync(10);

class UserService {

    constructor(client) {
        this.User = client.db().collection("users");
        console.log(this.User);
    }
    extractUserData(payload) {
        var hashPassword =  bcrypt.hashSync(payload.password, salt);
        const user = {
            name: payload.name,
            email: payload.email,
            password: hashPassword
        };
        // Remove undefined fields
        Object.keys(user).forEach(
            (key) => user[key] === undefined && delete user[key]
        );
        return user;
    }
    async createUser(payload) {
        const user = this.extractUserData(payload);
        var findEmail =  await this.User.findOne({
            email: payload.email
        });
        if(!findEmail){
            if(payload.password !== payload.confirmPassword){
               return {
                    errCode:2,
                    message: 'Mật khẩu và xác nhận mật khẩu không chính xác!'
                };
            }else{
                await this.User.findOneAndUpdate(
                    user,
                    { $set: { createAt:new Date() } },
                    { returnDocument: "after", upsert: true }
                );
                return {
                    errCode:0,
                    message:"Tài khoản đã được đăng ký thành công!",
                    
                };
            }
            
        }else{
            return {
                errCode: 1,
                message:"Địa chỉ email đã được sử dụng, vui lòng thử email khác!"
            };
        }
    }

    async login(payload){
        var findUser =  await this.User.findOne({
            email: payload.email,
        });
        console.log(findUser);
        if(findUser){
            let check = bcrypt.compareSync(payload.password, findUser.password);
            if(check){
                return {
                    errCode: 0,
                    message:"Đăng nhập thành công!",
                    user:findUser
                };
            }else{
                return {
                    errCode: 2,
                    message:"Sai mật khẩu!"
                };
            }
        }else{
            return {
                errCode: 1,
                message:"Sai địa chỉ email!"
            };
        }
    }
    async find(filter){
        console.log(filter);
        const cursor = await this.User.find(filter);
        if(cursor){
            return {
                errCode: 0,
                users: await cursor.toArray()
            };
        }else{
            return {
                errCode: 1,
                message:"Không tìm thấy tài khoản!"
            };
        }
    }

    

    async findById(id) {
        return await this.User.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async update(id, payload) {
        console.log(payload);
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const result = await this.User.findOneAndUpdate(
            filter,
            { $set: {email:payload.email} },
            { returnDocument: "after" }
        );
        return result.value;
        
    }

    async delete(id) {
        const result = await this.User.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async deleteAll() {
        const result = await this.User.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = UserService;
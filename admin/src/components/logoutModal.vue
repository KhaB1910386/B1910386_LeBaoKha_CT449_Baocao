<template>
     <!-- Logout Modal-->
     <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Bạn có muốn đăng xuất?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Chọn vào "Đăng xuất" nếu bạn muốn thoát!</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Hủy bỏ</button>
                    <button @click="logout" class="btn btn-primary">Đăng xuất</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                username:'',
                route: this.$route.query.page
            };
        },
        methods:{
            getUserName (){
            
                const user= JSON.parse(localStorage.getItem('user'));
                if(user){
                    this.username = user.name;
                }
                console.log(this.username);

            },
            logout(){
                localStorage.removeItem('user');
                this.$router.push({name:"login"})
            }
        },
        mounted(){
            this.getUserName();
        }
    }
</script>
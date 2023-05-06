<template>
    <Form @submit="submitUser" :validation-schema="userFormSchema" class="user">
        <div class="form-group">
            <Field name="email" v-model="userLocal.email" type="email" class="form-control form-control-user"
                placeholder="Địa chỉ email" />
                <ErrorMessage name="email" class="text-danger mx-2 my-1" />
            
        </div>
        <div class="form-group">
            <Field name="password" v-model="userLocal.password" type="password" class="form-control form-control-user"
                placeholder="Mật khẩu" />
                
            <ErrorMessage name="password" class="text-danger mx-2 my-1" />

        </div>
        
        <button class="btn btn-primary btn-user btn-block">
            Đăng nhập
        </button>
        <hr>
    </Form>
</template>


<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        emits: ["submit:user"],
        props: {
        user: { type: Object, required: true },
        },
        data() {
            const userFormSchema = yup.object().shape({
                
                email: yup
                    .string()
                    .required("Địa chỉ email phải hợp lệ!")
                    .email("Địa chỉ email không hợp lệ!")
                    .max(50, "Yêu cầu tối đa 50 ký tự!"),
                password: yup
                    .string()
                    .required("Mật phải hợp lệ!")
                    .min(8, "Yêu cầu tối thiểu phải 8 ký tự!")                    
               
            });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // user để liên kết với các input trên form
            userLocal: this.user ? this.user : '',
            userFormSchema,
            };
        },
        methods: {
            submitUser() {
                console.log(this.userLocal);
                this.$emit("submit:user", this.userLocal);
            },
        },
    };
</script>

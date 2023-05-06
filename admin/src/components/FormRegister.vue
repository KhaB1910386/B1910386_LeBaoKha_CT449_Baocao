<template>
     <Form @submit="submitUser" :validation-schema="userFormSchema" class="user">
        
        <div class="form-group">
            <Field v-model="userLocal.name" name="name" type="text" class="form-control form-control-user" id="exampleInputUserName"
                placeholder="Tên tài khoản" />
                <ErrorMessage name="name" class="text-danger" />
        </div>
        <div class="form-group">
            <Field v-model="userLocal.email" name="email" type="email" class="form-control form-control-user" id="exampleInputEmail"
                placeholder="Địa chỉ email"/>
                <ErrorMessage name="email" class="text-danger" />

        </div>
        <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <Field v-model="userLocal.password" name="password" type="password" class="form-control form-control-user"
                    id="exampleInputPassword" placeholder="Mật khẩu"/>
                    <ErrorMessage name="password" class="text-danger" />
            </div>
            <div class="col-sm-6">
                <Field v-model="userLocal.confirmPassword" name="confirmPassword" type="password" class="form-control form-control-user"
                    id="exampleRepeatPassword" placeholder="Xác nhận lại mật khẩu"/>
                    <ErrorMessage name="confirmPassword" class="text-danger" />

            </div>
        </div>
        <button class="btn btn-primary btn-user btn-block">
            Đăng ký
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
                name: yup
                    .string()
                    .required("Tên tài khoản phải hợp lệ!")
                    .min(2, "Yêu cầu tối thiểu phải 8 ký tự!"),
                email: yup
                    .string()
                    .required("Địa chỉ email phải hợp lệ!")
                    .email("Địa chỉ email không hợp lệ!")
                    .max(50, "Yêu cầu tối đa 50 ký tự!"),
                // address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
                password: yup
                    .string()
                    .required("Mật khẩu phải hợp lệ!")
                    .min(8, "Yêu cầu tối thiểu phải 8 ký tự!"),                    
                    // .matches(
                    //     /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    //     "Số điện thoại không hợp lệ."
                    // ),
                confirmPassword: yup
                    .string()
                    .required("Mật khẩu phải hợp lệ!")
                    .min(8, "Yêu cầu tối thiểu phải 8 ký tự!"),
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
                this.$emit("submit:user", this.userLocal);
            },
        },
    };
</script>

<template>
    <Form
        @submit="submitGenre"
        :validation-schema="genreFormSchema"
        class="row"
    >
        <div class="mb-3 col-12">
            <label class="form-label" for="name">Tên thể loại:</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="genreLocal.name"
            />
            <ErrorMessage name="name" class="text-danger mt-1" />
        </div>
       
        <div class="mb-3 col-12">
            <label class="form-label" for="description">Mô tả:</label>
            <Field
                name="description"
                as="textarea"
                class="form-control"
                v-model="genreLocal.description"
            />
            <ErrorMessage name="description" class="text-danger mt-1" />
        </div>
        <div class="mb-3 col-12">
            <button class="btn btn-primary">Lưu</button>
        </div>
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
        emits: ["submit:genre"],
        props: {
            genre: { type: Object, required: true },
        },
        data() {
            const genreFormSchema = yup.object().shape({
                name: yup
                    .string()
                    .required("Tên phải hợp lệ!"),
                description: yup
                    .string()
                    .required("Mô tả phải hợp lệ!")
                
            });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // genre để liên kết với các input trên form
            genreLocal: this.genre,
            genreFormSchema,
            };
        },
        methods: {
            submitGenre() {
                this.$emit("submit:genre", this.genreLocal);
            },
            
        },
    };
</script>

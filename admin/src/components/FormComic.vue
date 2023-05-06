
<template>
    <Form
        @submit="submitComic"
        :validation-schema="comicFormSchema"
        class="row"
    >
        <div class="mb-3 col-12">
            <label class="form-label" for="name">Tên sách:</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="comicLocal.name"
            />
            <ErrorMessage name="name" class="text-danger mt-1" />
        </div>
        <div class="mb-3 col-12">
            <label class="form-label" for="photo">Hình ảnh:</label>
            <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="photo">
            <div class="border p-2 mt-3">
                <p>Xem trước:</p>
                <div v-if="preview">
                    <p class="mb-0">Tên tập tin: {{ comicLocal.photo.name }}</p>
                    <img :src="preview" class="img-fluid"/>
                </div>
                <div v-else-if="comicLocal.photo">
                    <p class="mb-0">Tên tập tin: {{ comicLocal.photo }}</p>
                    <img :src="'http://localhost:3000/assets/pdf/'+comicLocal.photo" class="img-fluid"/>
                </div>
            </div>
            <!-- <input
                name="photo"
                type="file"
                class="form-control-file"
                @change="onFileChangePhoto($event,input)"
                accept="jpg/png/jpeg*"
            /> -->
            <ErrorMessage name="photo" class="text-danger" />
        </div>
        <div class="mb-3 col-md-6">
            <label class="form-label" for="_idGenre">Thể loại:</label>
            <select class="form-control" name="_idGenre" v-model="comicLocal._idGenre">
                <option 
                v-for="(genre, index) in genres"
                :key="genre._id"
                :value="genre._id"
                >{{ genre.name }}</option>
            </select>
            <ErrorMessage name="_idGenre" class="text-danger" />
        </div>
        <div class="mb-3 col-md-6">
            <label class="form-label" for="schedule">Lịch trình:</label>
            <select class="form-control" name="schedule" v-model="comicLocal.schedule">
                <option value="monday">Thứ hai</option>
                <option value="tuesday">Thứ ba</option>
                <option value="wednesday">Thứ tư</option>
                <option value="thursday">Thứ năm</option>
                <option value="friday">Thứ sáu</option>
                <option value="saturday">Thứ bảy</option>
                <option value="sunday">Chủ nhật</option>
            </select>
            <ErrorMessage name="schedule" class="text-danger" />
        </div>
        <div class="mb-3 col-12">
            <label class="form-label" for="actor">Tác giả:</label>
            <Field
                name="actor"
                type="text"
                class="form-control"
                v-model="comicLocal.actor"
            />
            <ErrorMessage name="actor" class="text-danger mt-1" />
        </div>
       
        <div class="mb-3 col-12">
            <label class="form-label" for="description">Mô tả:</label>
            <Field
                name="description"
                as="textarea"
                class="form-control"
                v-model="comicLocal.description"
            />
            <ErrorMessage name="description" class="text-danger mt-1" />
        </div>
        <div class="col-12 mb-3">
            <div class="form-check col-md-3">
                <input
                    name="trending"
                    type="checkbox"
                    class="form-check-input"
                    v-model="comicLocal.trending"
                />
                <label for="trending" class="form-check-label">
                    Thịnh hành
                </label>
            </div>
        </div>
         <div class="col-12 mb-3 form-group">
            <label class="form-label" for="content">Chương:</label>
            <div
                v-for="(input,k) in inputs" 
                :key="k"
                class="row mb-2"
            >
                <div class="col-8">
                    <input name="nameContent"
                        type="text"
                        class="form-control mb-3"
                        v-model="input.nameContent" />
                    <input
                        name="content"
                        type="file"
                        class="form-control-file"
                        accept="pdf/*"
                        @change="onFileChange($event,input)"
                    />
                    <!-- <p v-if=""></p> -->
                    
                    <div class="border p-2 mt-3">
                        <p>Xem trước:</p>
                        
                        <div v-if="input.embedSrc">
                            <p >{{ input.content.name }}</p>
                            <embed
                                type="video/webm"
                                :src="input.embedSrc"
                                width="100%"
                                style="max-height: 50rem; min-height: 20rem"
                            />
                        </div>
                        <div v-else>
                            <p>Tên tập tin: {{ input.content }}</p>
                            <embed
                                v-if="input.content"
                                type="video/webm"
                                :src="'http://localhost:3000/assets/pdf/'+input.content"
                                width="100%"
                                style="max-height: 70rem; min-height: 20rem"
                            />
                        </div>
                    </div>
                </div>
                <span>
                    <i class="fas fa-minus-circle" @click="remove(k,input._id)" v-show="k || ( !k && inputs.length > 1)" style="font-size: 20px;cursor: pointer;padding-right: 5px;"></i>
                    <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1" style="font-size: 20px;cursor: pointer;padding-right: 5px;"></i>
                </span>
                
            </div>
        </div>
        <div class="mb-3 col-12">
            <button class="btn btn-primary">Lưu</button>
        </div>
    </Form>
</template>

<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import genreService from "@/services/genre.service";
    import comicService from "@/services/comic.service";
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        name: "AddRemove",
        emits: ["submit:comic"],
        props: {
            comic: { type: Object, required: true },
            content: { type: Array,required:true, default:[{
                nameContent:'',
                content:''
            }] },
        },
        data() {
            const comicFormSchema = yup.object().shape({
                name: yup
                    .string()
                    .required("Name must be valid"),
                actor: yup
                    .string()
                    .required("Actor must be valid"),
                description: yup
                    .string()
                    .required("Description must be valid"),
                
               
                
            });
            return {
                    // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
                    // comic để liên kết với các input trên form
                    genres:[],
                    // selected: this.genreSelected ? this.genreSelected : '',
                    comicLocal: this.comic,
                    inputs: [...this.content],
                    comicFormSchema,
                    preview: null,
                                        
            };
        },
       
        methods: {
            onFileChange($event,input) {
                const file = $event.target.files[0];    
                if(file){
                    input.content = file;
                    input.embedSrc = URL.createObjectURL($event.target.files[0]);
                }
            },
            previewImage($event) {
                var input = $event.target;
                if (input.files) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.preview = e.target.result;
                    }
                    
                    this.comicLocal={
                        photo:input.files[0]
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            },
            submitComic() {
                this.$emit("submit:comic", this.comicLocal,this.inputs);
                // this.inputs={}
            },
            async retrieveGenres() {
                try {
                    var genres = await genreService.getAll();
                    if(genres && genres.errCode == 0){
                        this.genres = genres.genres;
                    } 
                } catch (error) {
                    console.log(error);
                }
            },
            add(index) {
                this.inputs.push({
                            nameContent:'',
                            content: '',
                            embedSrc:''
                        });
                
            },
            async remove(index,id) {
                if(id){
                    if (confirm("Are you sure remove chapter ?")) {
                        try {
                            // console.log(id)
                            var remove = await comicService.deleteContent(id);
                            console.log(remove);
                            if(remove && remove.errCode==0){
                                toast.success(remove.message);
                                // this.refreshList();
                            }else{
                                toast.error(remove.message);
                            }
                        } catch (error) {
                            toast.error(error);
                        }
                    }
                    this.inputs.splice(index, 1);
                }else{
                    this.inputs.splice(index, 1);
                }
            }
        },
         mounted(){
            this.retrieveGenres();
        }
    };
</script>

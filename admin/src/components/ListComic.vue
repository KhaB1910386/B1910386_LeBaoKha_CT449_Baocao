<script>
export default {
    props: {
        comics: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex","delete"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        deleteComic(id) {
            this.$emit("delete", id);
        },
    }
};
</script>

<template>
    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th class="text-center">ID</th>
                <th class="col-3">Tên sách</th>
                <th>Hình ảnh</th>
                <th class="col-3">Tác giả</th>
                <th class="col-3">Mô tả</th>
                <th class="text-center col-2">Hoạt động</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(comic, index) in comics"
                :key="comic._id"
                :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)"
            >

                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ comic.name }}</td>
                <td class="text-center">
                    <img :src="'http://localhost:3000/assets/pdf/'+comic.photo" style="width:100px"/> 
                </td>
                <td>{{ comic.actor }}</td>
                <td >
                    <div style="white-space: nowrap; 
                        width: 200px; 
                        overflow: hidden;
                        text-overflow: ellipsis;
                         ">
                    {{ comic.description }}
                    </div>
                    </td>
                <td class="text-center">
                    <router-link
                    :to="{
                        name: 'comic.edit',
                        params: { id: comic._id },
                    }"
                    >
                    <i class="far fa-edit text-success" style="padding-right: 10px;"></i>
                    
                    </router-link>
                    <button class="btn" @click="deleteComic(comic._id)">
                        <i class="far fa-trash-alt text-danger"></i>
                    </button>
                    
                </td>
            </tr>
            
        </tbody>
    </table>
    
</template>
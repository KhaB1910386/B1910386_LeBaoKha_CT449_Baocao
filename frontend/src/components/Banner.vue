
<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div v-bind:class="getClass(index)" v-for="(comic,index) in comics" :key="comic._id">
                <div class="banner" v-bind:style='{ backgroundImage: `url("http://localhost:3000/assets/pdf/${comic.photo}")` }'>
                </div>
                <div class="carousel-caption banner-content">
                    <div class="banner-info">
                        <h1 class="banner-info-title">
                           {{ comic.name }}
                        </h1>
                        <p class="banner-info-overview">
                            {{ comic.description }}
                        </p>
                        <button class="btn">
                            <router-link :to="{
                                    name: 'comic.detail',
                                    params: { id: comic._id },
                                }" 
                                class="banner-button-link">
                                Xem ngay
                            </router-link>
                        </button>
                    </div>
                    <div class="banner-poster">
                        <img :src="'http://localhost:3000/assets/pdf/'+comic.photo">
                    </div>
                </div>
            </div>
            
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Trước</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Kế tiếp</span>
        </button>
      </div>
  </div>
</template>

<script>

import comicService from '../services/comic.service';
export default {
    data(){
        return{
            comics:[],
            // carousel-item
        }

    },
    methods:{
        getClass(index){
        return {
                'carousel-item active': index == 0,  
                'carousel-item': index != 0
            }
        },
            
        async retrieveComics() {
            try {
                var comics = await comicService.getAll();
                if(comics && comics.errCode == 0){
                    this.comics = comics.comics;

                } 

                
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted(){
        this.retrieveComics();
    }
}
</script>

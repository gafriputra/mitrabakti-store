<template>
    <div>
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text product-more">
                            <a href="./home.html"><i class="fa fa-home"></i> Home</a>
                            <span>Detail</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->
        <!-- Product Shop Section Begin -->
        <section class="product-shop spad page-details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="product-pic-zoom">
                                    <img class="product-big-img" :src="gambarDefault" alt="" />
                                </div>
                                <div class="product-thumbs" v-if="gambarDefault . length > 0">
                                    <carousel class="product-thumbs-track ps-slider" :mouseDrag="true" :dots="false" :items="3" :nav="false" >
                                        <div 
                                        class="pt" 
                                        v-for="ss in detailProduct.product_galleries" 
                                        :key="ss.id" 
                                        :class="gambarDefault == ss.image ? 'active' : ' '" 
                                        @click="changeImg(ss.image)">
                                            <img :src="ss.image" alt="" />
                                        </div>
                                    </carousel>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-details">
                                    <div class="pd-title">
                                        <span>{{detailProduct.category.name}}</span>
                                        <h3>{{detailProduct.name}}</h3>
                                    </div>
                                    <div class="pd-desc">
                                        <p v-html="detailProduct.description"></p>

                                        <h4>Rp {{ detailProduct.price }}</h4>
                                    </div>
                                    <div class="quantity">
                                        <a style="color: white;" @click="addToCart()" class="primary-btn pd-cart">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Shop Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import Axios from 'axios'

export default {
    name:'contents',
    components: {
        carousel
    },
    data(){
        return{
            detailProduct:[],
            gambarDefault: ''
        }
    },
    methods : {
        setDataProduct(data){
            this.detailProduct = data;
            let gambar = data.product_galleries;
            gambar = gambar.filter(galery => galery.is_default == 1);
            this.gambarDefault = gambar[0].image;
        },
        changeImg(urlImg){
            this.gambarDefault = urlImg;
        },
        addToCart(){
            var gl = this.detailProduct.product_galleries;
            var galery = gl.filter(galery => galery.is_default == 1);

            var product = {
                id : this.detailProduct.id,
                name : this.detailProduct.name,
                price : this.detailProduct.price,
                image : galery[0].image,
                jumlah : 1
            }
            this.$store.dispatch('addKeranjang', product);
            this.$swal.fire({
                icon : 'success',
                title : product.name,
                text : 'Berhasil Masuk Keranjang'
            });
        }
    },
    mounted(){
        Axios.get('http://127.0.0.1:8000/api/products', {
        params:{
        id: this.$route.params.id
        }
        })
        .then((res) => {
            this.setDataProduct(res.data.data)
        }) 
        .catch((err) => {
            console.log(err);
        });
        
    }
}
</script>

<style scoped>
.product-thumbs .pt{
    margin-right: 14px;
}
.quantity .pd-cart:hover {
    cursor:pointer;
}
</style>
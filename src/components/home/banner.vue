<template>
<div>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if="getProduct . length > 0">

                    <carousel class="product-slider" :mouseDrag="true" :dots="false" :items="3" :autoplay="true" :nav="false" :autoplayHoverPause="true" :autoplaySpeed="false">
                        <div class="product-item" v-for="items in getProduct" :key="items.id">
                            <div class="pi-pic">
                                <img :src="photo(items.product_galleries)" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a style="cursor:pointer" @click="addToCart(items)"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <router-link :to="'/product/'+ items.id"><li class="quick-view"><a href="#">+ Quick View</a></li></router-link>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">{{ items.type }}</div>
                                <a href="#">
                                    <h5>{{items.name}}</h5>
                                </a>
                                <div class="product-price">
                                    {{formatPrice(items.price)}}
                                </div>
                            </div>
                        </div>
                    </carousel>

                </div>
                <div class="col-lg-12" v-else>
                    <p> </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import Axios from 'axios'

export default {
    name: 'banner',
    components: { carousel },
    data() {
        return  {
            getProduct: []
        }
    },
    methods: {
        photo(galery){
            var photo = galery.filter(galery => galery.is_default == 1);
            return photo[0].image;
        },
        addToCart(items){

            var gl = items.product_galleries;
            var galery = gl.filter(galery => galery.is_default == 1);

            var product = {
                id : items.id,
                name : items.name,
                price :items.price,
                image : galery[0].image,
                jumlah : 1
            }

            this.$store.dispatch('addKeranjang', product);
            this.$swal.fire({
                icon : 'success',
                title : product.name,
                text : 'Berhasil Masuk Keranjang'
            });
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return "Rp. " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    mounted() {
       Axios.get('http://127.0.0.1:8000/api/products')
            .then(res => (this.getProduct = res.data.data.data))
            .catch((error) => {
                console.log(error);
            })
    }
}

</script>

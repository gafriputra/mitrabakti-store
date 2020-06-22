<template>
    <div>
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text product-more">
                            <a href="./home.html"><i class="fa fa-home"></i> Home</a>
                            <span>Shopping Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->
        <!-- Shopping Cart Section Begin -->
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cart-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th class="p-name text-center">Product Name</th>
                                                <th>Price</th>
                                                <th>Item</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="getKeranjang . length > 0">
                                            <tr v-for="(items, index) in getKeranjang" :key="index">
                                                <td style="width:100px" class="cart-pic first-row">
                                                    <img :src="items.image" />
                                                </td>
                                                <td class="cart-title first-row text-center">
                                                    <h5>{{ items.name }}</h5>
                                                </td>

                                                <td class="p-price first-row">
                                                    Rp {{ items.price }}
                                                </td>
                                                
                                                <td class="p-price first-row">
                                                    <!-- {{ items.jumlah }} -->
                                                    <input v-model="items.jumlah" @keyup="getOngkir()" type="text" class="form-control" id="jumlah" aria-describedby="jumlah" placeholder="Masukan Jumlah">

                                                </td>

                                                <td @click="deleteItems(index)" class="delete-item">
                                                    <a style="cursor:pointer"><i class="material-icons">close</i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr>
                                                <td colspan="5">Keranjang Kosong</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <h4 class="mb-4">
                                    Informasi Pembeli:
                                </h4>
                                <div class="user-checkout">
                                    <form>
                                        <div class="form-group">
                                            <label for="namaLengkap">Nama lengkap</label>
                                            <input v-model="customerInfo.name" type="text" class="form-control" id="namaLengkap" aria-describedby="namaHelp" placeholder="Masukan Nama">
                                        </div>
                                        <div class="form-group">
                                            <label for="namaLengkap">Email Address</label>
                                            <input v-model="customerInfo.email" type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Masukan Email">
                                        </div>
                                        <div class="form-group">
                                            <label for="namaLengkap">No. HP</label>
                                            <input v-model="customerInfo.number" type="text" class="form-control" id="noHP" aria-describedby="noHPHelp" placeholder="Masukan No. HP">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="kotaTujuan">Kota Tujuan</label>
                                                <multiselect
                                                style="border-opacity : 0.1"
                                                @input="getCity" 
                                                :options="options"
                                                :value="doSomething"
                                                group-values="city" 
                                                group-label="title" 
                                                :group-select="false" 
                                                placeholder="Kota Tujuan" 
                                                track-by="title" 
                                                label="title">
                                                <span slot="noResult">Oops! No elements found.</span>
                                                </multiselect>
                                        </div>
                                        
                                        <div class="form-group ">
                                            <label for="kotaTujuan">Kurir</label>
                                            <div class="custom02">
                                                <input type="radio" id="JNE" name="courier" @change="getCourier($event)" value="jne"/><label for="JNE">JNE</label>
                                                <input type="radio" id="TIKI" name="courier" @change="getCourier($event)" value="tiki"/><label for="TIKI">TIKI</label>
                                                <input type="radio" id="POS" name="courier" @change="getCourier($event)" value="pos"/><label for="POS">POS</label>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="alamatLengkap">Alamat Lengkap</label>
                                            <textarea v-model="customerInfo.address" class="form-control" id="alamatLengkap" rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="proceed-checkout">
                                    <ul>
                                        <li class="subtotal">Subtotal <span>Rp. {{ subTotal(getKeranjang) }}</span></li>
                                        <li class="subtotal mt-3">Biaya Pengiriman <span>Rp. {{ costOngkir }}</span></li>
                                        <li class="subtotal mt-3">Pajak <span>10%</span></li>
                                        <li class="subtotal mt-3">Total Biaya <span>Rp. {{ totalBiaya(getKeranjang) }}</span></li>
                                        <li class="subtotal mt-3">Bank Transfer <span>BCA</span></li>
                                        <li class="subtotal mt-3">No. Rekening <span>2208 1996 1403</span></li>
                                        <li class="subtotal mt-3">Atas Nama <span>Gafri Putra A.</span></li>
                                    </ul>
                                    <div class="btn-group mt-3 container" role="group" aria-label="Basic example" v-if="getKeranjang . length > 0">
                                        <button @click="getOngkir()" type="button" class="btn btn-primary text-uppercase">check shipping</button>
                                        <button :disabled="!flagCheckOut" @click="checkOut()" type="button" class="btn btn-outline-danger text-uppercase">I ALREADY PAID</button>
                                    </div>
                                    <div class="btn-group mt-3 container" role="group" aria-label="Basic example">
                                        <a href="/" type="button" class="btn btn-outline-primary text-uppercase">BACK TO HOME</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Shopping Cart Section End --> 
    </div>
</template>

<script>
import Axios from 'axios'
import 'vue-multiselect/dist/vue-multiselect.min.css';

export default {
    data() {
        return {
            doSomething: '',
            idCity : 0,
            couriers : '',
            costOngkir : 0,
            flagCheckOut : false,
            customerInfo : {
                name : '',
                email : '',
                number : '',
                address : ''
            },
           options: []
        }
    },
    methods: {
        deleteItems(id) {
            this.$store.dispatch('deleteItem', id);
        },
        subTotal(items) {
            let totalAmount = 0;
            items.forEach(function(el){
                const total = el.price * el.jumlah;
                    totalAmount += total;
            })
            return totalAmount;
        },
        totalBiaya(items) {
            let totalAmount = 0;
            items.forEach(function(el){
                const total = el.price * el.jumlah;
                    totalAmount += total;
            });
            let subTotal = totalAmount + this.costOngkir;
            let total =  (10 * subTotal / 100) + subTotal;
            return total;
        },
        totalJumlah() {
            let totalJumlah = 0;
            this.getKeranjang.forEach(function(el){
                    totalJumlah += el.jumlah;
            });
            return totalJumlah;
        },
        checkOut() {
                let items = this.$store.getters.keranjang;
                let productId = items.map(function(product) {
                    let form = [product.id,product.jumlah];
                    // let form = product.id;
                    return form;
                });

                let checkOutData = {
                    'name' : this.customerInfo.name,
                    'email' : this.customerInfo.email,
                    'phone' : this.customerInfo.number,
                    'address' : this.customerInfo.address + " , Kurir " + this.couriers,
                    'transaction_total' : this.totalBiaya(this.$store.getters.keranjang),
                    'transaction_status' : "PENDING",
                    'transaction_details' : productId,
                    'shipping' : this.costOngkir
                    // 'type_shipping': this.couriers
                }

                if(!this.customerInfo.name){
                    this.$swal.fire({
                        icon : 'error',
                        title : 'Nama tidak boleh kosong'
                    });
                } else if (!this.customerInfo.email) {
                    this.$swal.fire({
                        icon : 'error',
                        title : 'Email tidak boleh kosong'
                    });
                } else if (!this.customerInfo.number) {
                    this.$swal.fire({
                        icon : 'error',
                        title : 'Nomor telepon tidak boleh kosong'
                    });
                } else if (!this.customerInfo.address) {
                    this.$swal.fire({
                        icon : 'error',
                        title : 'Alamat tidak boleh kosong'
                    });
                } else {
                    if(items.length > 0){
                        Axios.post('http://127.0.0.1:8000/api/checkout', checkOutData)
                        .then( 
                                this.$swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'OK'
                                }).then((result) => {
                                    if (result.value) {
                                        this.$store.dispatch('deleteAllItem'),
                                            this.customerInfo = {
                                                name : '',
                                                email : '',
                                                number : '',
                                                address : ''
                                            }
                                        this.couriers = ''
                                        this.costOngkir = 0
                                        this.$router.push('/Success')
                                    }
                                })
                            )
                        .catch((err) => {
                            console.log(err)
                        })
                    }else{
                        this.$swal.fire({
                            icon : 'error',
                            title : 'Barang Tidak Ada'
                        })
                    }
                }
        },
        getCity(newtag){
            this.flagCheckOut = false;
            this.doSomething = newtag;
            if(newtag) {
                this.idCity = newtag.city_id;
            }else {
                this.idCity = 0;
            }
        },
        getCourier(event) {
            this.flagCheckOut = false;
            this.couriers = event.target.value;
        },
        getOngkir(){
            let idCity = this.idCity;
            let courier = this.couriers;

            if(idCity && !courier) {

                this.$swal.fire({
                    icon: 'error',
                    title: 'Kurir tidak boleh kosong',
                });

            } else if (!idCity && courier) {

                this.$swal.fire({
                    icon: 'error',
                    title: 'Kota tujuan tidak boleh kosong',
                });

            } else if(idCity && courier) {

                this.flagCheckOut = true;

                let FormData = {
                    courier : this.couriers,
                    origin : '153',
                    destination : this.idCity,
                    weight : '2000'
                }

                Axios.post('http://api-shayna.satrioyudho.com/api/checkOngkir', FormData)
                .then(res => {
                    this.costOngkir = res.data.data[0].costs[0].cost[0].value * 10 * this.totalJumlah();
                })
                .catch(err => {
                    console.log(err);
                });

            } else {
                this.$swal.fire({
                    icon: 'error',
                    title: 'Kota dan kurir tidak boleh kosong',
                });
            }
        },
        getDatacity() {
            Axios.get('http://api-shayna.satrioyudho.com/api/getKota')
            .then(res => {
                this.options = res.data.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    computed: {
        getKeranjang() {
            return this.$store.getters.keranjang;
        }
    },
    created() {
            this.getDatacity();
    }
}
</script>

<style scoped>
.custom02 input[type="radio"] {
	display: none;
}
.custom02 label {
	position: relative;
	display: inline-block;
	padding: 3px 3px 3px 20px;
    margin-right: 5%;
	cursor: pointer;
}
.custom02 label::before,
.custom02 label::after {
	position: absolute;
	content: '';
	top: 60%;
	border-radius: 100%;
	-webkit-transition: all .2s;
	transition: all .2s;
}
.custom02 label::before {
	left: 0;
	width: 14px;
	height: 14px;
	margin-top: -8px;
	background: #f3f3f3;
	border: 1px solid #ccc;
}
.custom02 label:hover::before {
	background: #fff;
}
.custom02 label::after {
	opacity: 0;
	left: 3px;
	width: 8px;
	height:8px;
	margin-top: -5px;
	background: #3498db;
	-webkit-transform: scale(2);
	transform: scale(2);
}
.custom02 input[type="radio"]:checked + label::before {
	background: #fff;
	border: 1px solid #3498db;
}
.custom02 input[type="radio"]:checked + label::after {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}
</style>
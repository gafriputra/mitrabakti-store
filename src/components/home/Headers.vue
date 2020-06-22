<template>
  <div>
    <!-- Header Section Begin -->
    <header class="header-section">
        <div class="header-top">
            <div class="container">
                <div class="ht-left">
                    <div class="mail-service">
                        <i class=" fa fa-envelope"></i> hello.shayna@gmail.com
                    </div>
                    <div class="phone-service">
                        <i class=" fa fa-phone"></i> +628 22081996
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="inner-header">
                <div class="row">
                    <div class="col-lg-2 col-md-2">
                        <div class="logo">
                            <a href="/">
                                <img src="img/logo_website_shayna.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7"></div>
                    <div class="col-lg-3 text-right col-md-3">
                        <ul style="cursor : pointer"  class="nav-right">
                            <li class="cart-icon">
                                Keranjang Belanja &nbsp;
                                <a href="#">
                                    <i class="icon_bag_alt"></i>
                                    <span>{{getKeranjang . length}}</span>
                                </a>
                                <div class="cart-hover">
                                    <div class="select-items">
                                        <table>

                                            <tbody v-if="getKeranjang . length > 0">
                                                <tr v-for="(items, index) in getKeranjang" :key="index">
                                                    <td style="width: 60px; height: auto;" class="si-pic">
                                                        <img :src="items.image" alt="" />
                                                    </td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>Rp. {{items.price}} X {{ items.jumlah }}</p>
                                                            <h6>{{ items.name }}</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="ti-close" @click="deleteItem(index)"></i>
                                                    </td>
                                                </tr>
                                            </tbody>

                                            <tbody v-else>
                                                <p>Keranjang Kosong !!</p>
                                            </tbody>

                                        </table>
                                    </div>
                                    <div class="select-total">
                                        <span>total:</span>
                                        <h5 v-if="getKeranjang . length > 0">Rp. {{ getTotal(getKeranjang) }}</h5>
                                        <h5 v-else>Rp. 0</h5>
                                    </div>
                                    <div class="select-button">
                                        <router-link to="/cart"><a style="width:290px" href="#" class="primary-btn view-card">VIEW CARD</a></router-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header End -->
  </div>
</template>

<script>
export default {
  name: 'Headers',
  methods: {
    getTotal(amount){
        const totalAmount = [];
          amount.forEach(function(el){
            const total = el.price * el.jumlah;
                totalAmount.push(total)
          })
        if(totalAmount.length > 0){
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            return totalAmount.reduce(reducer);
        }
      },
      deleteItem(id){
          this.$store.dispatch('deleteItem', id);
      }
  },
  computed: {
      getKeranjang() {
          return this.$store.getters.keranjang;
      }
  }
}
</script>


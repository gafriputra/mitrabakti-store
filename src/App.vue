<template>
  <div id="app"> 
       <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted(){
    if (localStorage.getItem('keranjang')) {
        try {
            this.$store.dispatch('getKeranjang', JSON.parse(localStorage.getItem('keranjang')))
        } catch(e) {
            localStorage.removeItem('keranjang');
        }
        }
  }
}
</script>
<template>
  <div class="home"> 
      <Headers/>
      <Slide/>
      <banner/>
      <galery/>
      <footers/>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/home/Headers.vue'
import Slide from '@/components/home/Slide.vue'
import banner from '@/components/home/banner.vue'
import galery from '@/components/home/galery.vue'
import footers from '@/components/home/footers.vue'

export default {
  name: 'Home',
  components: {
    Headers,
    Slide,
    banner,
    galery,
    footers
  },
  
}
</script>
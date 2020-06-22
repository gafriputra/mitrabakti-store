<template>
  <div class="product">
    <Headers/>
    <contents/>
    <footers/>
  </div>
</template>

<script>
import Headers from '../components/home/Headers.vue'
import contents from '../components/product/contents.vue'
import footers from '../components/home/footers.vue'


export default {
  name: 'product',
  components: {
    Headers,
    contents,
    footers
  }
}
</script>

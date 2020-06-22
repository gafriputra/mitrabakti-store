<template>
    <div>
        <Headers/>
        <contents/>
    </div>
</template>

<script>
import Headers from '../components/home/Headers.vue'
import contents from '../components/shopping/content'

export default {
    name: 'Cart',
    components: {
        Headers,
        contents
    }
}
</script>
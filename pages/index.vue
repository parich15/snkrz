<template>
  <div id="inicio" class="overflow-hidden">
    <hero />
    <presentacion />
    <trending />
    <seccion-fixed />
  </div>
</template>

<script>
import Hero from '../components/Inicio/Hero.vue'
import Presentacion from '../components/Inicio/Presentacion.vue'
import SeccionFixed from '../components/Inicio/SeccionFixed.vue'
import Trending from '../components/Inicio/Trending.vue'
export default {
  components: {
    Hero,
    Presentacion,
    Trending,
    SeccionFixed
  }
}
</script>

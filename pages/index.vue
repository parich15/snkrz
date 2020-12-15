<template>
  <div id="inicio" class="overflow-hidden">
    <hero />
    <presentacion />
    <trending />
    <selector />
  </div>
</template>

<script>
import Hero from '../components/Inicio/Hero.vue'
import Presentacion from '../components/Inicio/Presentacion.vue'
import Selector from '../components/Inicio/Selector.vue'
import Trending from '../components/Inicio/Trending.vue'
export default {
  components: {
    Hero,
    Presentacion,
    Trending,
    Selector
  }
}
</script>

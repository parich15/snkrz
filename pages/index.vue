<template>
  <div id="inicio" class="overflow-hidden">
    <hero />
    <presentacion />
    <trending />
    <selector />
    <cta />
    <contacto-inicio />
  </div>
</template>

<script>
import ContactoInicio from '../components/Inicio/ContactoInicio.vue'
import Cta from '../components/Inicio/Cta.vue'
import Hero from '../components/Inicio/Hero.vue'
import Presentacion from '../components/Inicio/Presentacion.vue'
import Selector from '../components/Inicio/Selector.vue'
import Trending from '../components/Inicio/Trending.vue'
export default {
  components: {
    Hero,
    Presentacion,
    Trending,
    Selector,
    Cta,
    ContactoInicio
  }
}
</script>

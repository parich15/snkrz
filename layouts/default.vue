<template>
  <div
    :class="{'dark' : oscuro}"
    class="antialiased"
  >
    <topbar />
    <navbar />
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
export default {
  components: {
    Navbar,
    Topbar
  },
  computed: {
    ...mapGetters({ oscuro: 'getOscuro' })
  }
}
</script>

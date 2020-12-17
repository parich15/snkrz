<template>
  <section style="box-shadow: 0px -1px 4px #6b728099;">
    <div class="  bg-gray-100 font-bold containerSelector flex text-center font-brand2 text-xl dark:bg-gray-800 dark:text-gray-400 ">
      <div :class="Trending ? 'bg-green-500 text-white' : 'bg-auto'" class=" w-1/3 h-full cursor-default transition ease-in duration-200 hover:bg-green-500 hover:text-white " @mouseenter="activarTrending">
        <h4 class="py-4 lg:tracking-wider">
          Trending
        </h4>
      </div>
      <div :class="HotPicks ? 'bg-green-500 text-white' : 'bg-auto'" class=" w-1/3 h-full cursor-default border-l-2 border-r-2 dark:border-gray-700 transition ease-in duration-200 hover:bg-green-500 hover:text-white " @mouseenter="activarHotPicks">
        <h4 class="py-4 lg:tracking-wider">
          Hot Picks
        </h4>
      </div>
      <div :class="Novedades ? 'bg-green-500 text-white' : 'bg-auto'" class=" w-1/3 h-full cursor-default transition ease-in duration-200 hover:bg-green-500 hover:text-white" @mouseenter="activarNovedades">
        <h4 class="py-4 lg:tracking-wider">
          Novedades
        </h4>
      </div>
    </div>
    <div class=" bg-gray-50 dark:bg-gray-900 h-60 lg:h-96 lg:flex lg:items-center relative ">
      <transition
        enter-active-class="transition ease-out duration-300 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-300 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="Trending" class="productosTrending py-4 flex justify-around absolute left-0 right-0 inset-0 ">
          <div>
            <producto-destacado titulo="Air Force X10" desc="Descripción Bamba" :rating="4" />
          </div>
          <div>
            <producto-destacado titulo="Air Force X10" desc="Descripción Bamba" :rating="4" />
          </div>
          <div>
            <producto-destacado titulo="Air Force X10" desc="Descripción Bamba" :rating="4" />
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="transition ease-out duration-300 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-300 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="HotPicks" class="productosHotPicks py-4 flex justify-around absolute left-0 right-0 ">
          <div>
            <producto-destacado titulo="Jordan Max 1" desc="Descripción Bamba" :rating="5" />
          </div>
          <div>
            <producto-destacado titulo="Jordan Max 1" desc="Descripción Bamba" :rating="5" />
          </div>
          <div>
            <producto-destacado titulo="Jordan Max 1" desc="Descripción Bamba" :rating="5" />
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="transition ease-out duration-300 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-300 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="Novedades" class="productosNovedades py-4 flex justify-around absolute left-0 right-0 ">
          <div>
            <producto-destacado titulo="Jeezy 420" desc="Descripción Bamba" :rating="3" />
          </div>
          <div>
            <producto-destacado titulo="Jeezy 420" desc="Descripción Bamba" :rating="3" />
          </div>
          <div>
            <producto-destacado titulo="Jeezy 420" desc="Descripción Bamba" :rating="3" />
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import ProductoDestacado from '../ProductoDestacado.vue'
export default {
  name: 'Selector',
  components: {
    ProductoDestacado
  },
  data () {
    return {
      Trending: true,
      HotPicks: false,
      Novedades: false
    }
  },
  methods: {
    activarTrending () {
      this.Trending = true
      this.HotPicks = false
      this.Novedades = false
    },
    activarHotPicks () {
      this.Trending = false
      this.HotPicks = true
      this.Novedades = false
    },
    activarNovedades () {
      this.Trending = false
      this.HotPicks = false
      this.Novedades = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

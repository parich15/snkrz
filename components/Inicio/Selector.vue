<template>
  <section class="md:min-h-screen" style="box-shadow: 0px -1px 4px #6b728099;">
    <div class="  bg-gray-100 font-bold containerSelector flex text-center font-brand2 text-xl">
      <div :class="nike ? 'bg-red-500 text-white' : 'bg-gray-100'" class=" w-1/3 h-full cursor-default transition ease-in duration-200 hover:bg-red-500 hover:text-white " @mouseenter="activarNike">
        <h4 class="py-4">
          Nike
        </h4>
      </div>
      <div :class="jordan ? 'bg-blue-500 text-white' : 'bg-gray-100'" class=" w-1/3 h-full cursor-default border-l-2 border-r-2 transition ease-in duration-200 hover:bg-blue-500 hover:text-white " @mouseenter="activarJordan">
        <h4 class="py-4">
          Jordan
        </h4>
      </div>
      <div :class="adidas ? 'bg-green-500 text-white' : 'bg-gray-100'" class=" w-1/3 h-full cursor-default transition ease-in duration-200 hover:bg-green-500 hover:text-white" @mouseenter="activarAdidas">
        <h4 class="py-4">
          Adidas
        </h4>
      </div>
    </div>
    <div class="relative bg-gray-50 h-60 lg:h-96 lg:flex lg:items-center ">
      <transition
        enter-active-class="transition ease-out duration-100 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="nike" class="productosNike py-4 flex justify-around absolute left-0 right-0 ">
          <div>
            <producto-destacado titulo="Air Force Nike" desc="Descripción Bamba" :rating="4" />
          </div>
          <div>
            <producto-destacado titulo="Air Force Nike" desc="Descripción Bamba" :rating="4" />
          </div>
          <div>
            <producto-destacado titulo="Air Force Nike" desc="Descripción Bamba" :rating="4" />
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="transition ease-out duration-100 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="jordan" class="productosJordan py-4 flex justify-around absolute left-0 right-0 ">
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
        enter-active-class="transition ease-out duration-100 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="adidas" class="productosAdidas py-4 flex justify-around absolute left-0 right-0 ">
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
      nike: true,
      jordan: false,
      adidas: false
    }
  },
  methods: {
    activarNike () {
      this.nike = true
      this.jordan = false
      this.adidas = false
    },
    activarJordan () {
      this.nike = false
      this.jordan = true
      this.adidas = false
    },
    activarAdidas () {
      this.nike = false
      this.jordan = false
      this.adidas = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

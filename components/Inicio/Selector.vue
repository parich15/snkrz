<template>
  <section style="box-shadow: 0px -1px 4px #6b728099;">
    <div class="  bg-gray-100 font-bold containerSelector flex text-center font-brand2 text-xl dark:bg-gray-800 dark:text-gray-400 ">
      <div :class="Nike ? 'bg-green-500 text-white' : 'bg-auto'" class=" w-1/3 h-full cursor-default transition ease-in duration-200 hover:bg-green-500 hover:text-white " @mouseenter="activarNike">
        <h4 class="py-4 lg:tracking-wider">
          Nike
        </h4>
      </div>
      <div :class="Jordan ? 'bg-green-500 text-white' : 'bg-auto'" class=" w-1/3 h-full cursor-default border-l-2 border-r-2 dark:border-gray-700 transition ease-in duration-200 hover:bg-green-500 hover:text-white " @mouseenter="activarJordan">
        <h4 class="py-4 lg:tracking-wider">
          Jordan
        </h4>
      </div>
      <div :class="Adidas ? 'bg-green-500 text-white' : 'bg-auto'" class=" w-1/3 h-full cursor-default transition ease-in duration-200 hover:bg-green-500 hover:text-white" @mouseenter="activarAdidas">
        <h4 class="py-4 lg:tracking-wider">
          Adidas
        </h4>
      </div>
    </div>
    <div class="bg-gray-50 dark:bg-gray-900 h-56 lg:flex lg:h-96 lg:items-center relative ">
      <transition
        enter-active-class="transition ease-out duration-300 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-300 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="Nike" class="absolute flex h-full items-center justify-around left-0 productosNike right-0">
          <div v-for="nike in homeNikes" :key="nike.id" class="flex h-full items-center w-1/3">
            <producto-destacado :titulo="nike.Titulo" :desc="nike.Descripcion" :enlace="'http://178.62.58.172' + nike.Imagen.url" />
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
        <div v-show="Jordan" class="absolute flex h-full items-center justify-around left-0 productosJordan right-0">
          <div v-for="jordan in homeJordans" :key="jordan.id" class="flex h-full items-center w-1/3">
            <producto-destacado :titulo="jordan.Titulo" :desc="jordan.Descripcion" :enlace="'http://178.62.58.172' + jordan.Imagen.url" />
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
        <div v-show="Adidas" class="productosAdidas py-4 flex justify-around absolute left-0 right-0 h-full ">
          <div v-for="adidas in homeAdidas" :key="adidas.id" class="flex h-full items-center w-1/3">
            <producto-destacado :titulo="adidas.Titulo" :desc="adidas.Descripcion" :enlace="'http://178.62.58.172' + adidas.Imagen.url " />
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import ProductoDestacado from '../ProductoDestacado.vue'
import homenike from '~/apollo/queries/Selector/homenike'
import homejordan from '~/apollo/queries/Selector/homejordan'
import homeadidas from '~/apollo/queries/Selector/homeadidas'
export default {
  name: 'Selector',
  components: {
    ProductoDestacado
  },
  data () {
    return {
      Nike: true,
      Jordan: false,
      Adidas: false,
      homeNikes: [],
      homeJordans: [],
      homeAdidas: []
    }
  },
  apollo: {
    homeNikes: {
      prefetch: true,
      query: homenike
    },
    homeJordans: {
      prefetch: true,
      query: homejordan
    },
    homeAdidas: {
      prefetch: true,
      query: homeadidas
    }
  },
  methods: {
    activarNike () {
      this.Nike = true
      this.Jordan = false
      this.Adidas = false
    },
    activarJordan () {
      this.Nike = false
      this.Jordan = true
      this.Adidas = false
    },
    activarAdidas () {
      this.Nike = false
      this.Jordan = false
      this.Adidas = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

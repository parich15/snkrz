<template>
  <div>
    <a href="#">
      <img class="2xl:w-full h-56 hover:grow hover:shadow-lg md:w-96 object-cover rounded-lg w-full" :src="'http://localhost:1337' + snkrz.Imagen.url">
      <div class="pt-3 flex items-center justify-between">
        <p class=" dark:text-gray-400 font-brand md:text-xl text-3xl text-gray-600">{{ snkrz.Titulo }}</p>
      </div>
      <div v-if="snkrz.Stock" class="flex flex-col md:flex-row justify-between md:my-0 md:block">
        <p class="pt-1 text-green-700 font-bold text-xs dark:text-green-500 font-brand2 mb-2">Disponible</p>
        <div class="flex w-full justify-between items-center 2xl:w-full">
          <div class=" w-1/2">
            <ul class="flex">
              <li v-for="tallas in snkrz.Tallas" :key="tallas">
                <p v-if="tallas.Disponible === true" class="bg-green-600 font-bold px-1 rounded-2xl text-white mr-2.5">
                  {{ tallas.Talla }}
                </p>
                <p v-else class="bg-gray-500 font-bold px-1 rounded-2xl text-white mr-2.5">
                  {{ tallas.Talla }}
                </p>
              </li>
            </ul>
          </div>
          <div class=" w-1/2">
            <p class=" font-brand text-3xl md:text-2xl text-green-500 text-right 2xl:text-3xl">{{ snkrz.Precio }} € </p>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="pt-1 text-red-700 font-bold text-xs font-brand2 mb-2">Sin stock</p>
        <p class=" font-brand text-2xl text-gray-400">Precio no disponible </p>
      </div>

    </a>
  </div>
</template>

<script>
import snkrzQuery from '~/apollo/queries/Catalogo/snkrzQuery'
export default {
  name: 'Productos',
  data () {
    return {
      snkrzs: []
    }
  },
  apollo: {
    snkrzs: {
      prefetch: true,
      query: snkrzQuery
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

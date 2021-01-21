<template>
  <div class=" dark:bg-gray-800">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="'http://178.62.58.172' + snkrz.Imagen.url ">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest font-brand2">
            {{ snkrz.Marca[0].Marca }}
          </h2>
          <h1 class="text-3xl title-font font-medium mb-1 font-brand text-green-600">
            {{ snkrz.Titulo }}
          </h1>
          <div class="flex mb-4">
            <span class="flex py-2 border-l-2 border-gray-200 space-x-2s">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </span>
          </div>
          <p class="leading-relaxed dark:text-gray-200">
            {{ snkrz.Descripcion }}
          </p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex  items-center">
              <span class="mr-3 dark:text-gray-300">Número</span>
              <div class="relative">
                <select class="font-brand2 rounded border appearance-none border-gray-300 dark:border-gray-800 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 text-base pl-3 pr-10 dark:bg-gray-900  text-green-500 ">
                  <option v-for="talla in snkrz.Tallas" :key="talla.id">
                    {{ talla.Talla }}
                  </option>
                </select>
                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="flex">
            <span class="title-font font-brand text-4xl text-green-500">{{ snkrz.Precio }} €</span>
            <button class="font-brand flex ml-auto text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded transition duration-200">
              Me Interesa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import snkrzQuery from '~/apollo/queries/Snkrz/snkrzQuery'
export default {
  data () {
    return {
      snkrz: Object
    }
  },
  apollo: {
    snkrz: {
      prefetch: true,
      query: snkrzQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

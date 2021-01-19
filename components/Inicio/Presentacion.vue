<template>
  <section class="text-gray-700 body-font dark:bg-gray-800" data-aos="fade-in">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-900">
          <div class=" w-1/4 h-full bg-green-700 dark:bg-green-500" />
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 class="sm:w-2/5 text-gray-500 font-medium title-font text-2xl lg:text-3xl mb-2 sm:mb-0 font-brand ">
            Explora las Novedades
          </h1>
          <p class=" dark:text-gray-400 sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a faucibus enim. Donec varius ante vitae sollicitudin elementum. Lorem ipsum dolor sit amet.ed a faucibus enim. Donec varius ante vitae sollicitudin elementum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div v-for="novedad in novedades" :key="novedad.id" class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" :src="'http://178.62.58.172' + novedad.Imagen.url">
          </div>
          <h2 class=" font-brand dark:text-green-500 text-2xl font-medium title-font text-gray-600 mt-5">
            {{ novedad.Titulo }}
          </h2>
          <p class=" dark:text-gray-400 text-base leading-relaxed mt-2">
            {{ novedad.Texto }}
          </p>
          <a :href="novedad.enlace" class="font-brand2 text-xs text-green-500 inline-flex items-center mt-3 transition duration-500 ease-out transform hover:text-green-700">
            Más información
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import novedades from '~/apollo/queries/Inicio/novedades'
export default {
  name: 'Presentacion',
  data () {
    return {
      novedades: []
    }
  },
  apollo: {
    novedades: {
      prefetch: true,
      query: novedades
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

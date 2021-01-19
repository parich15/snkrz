<template>
  <section class="text-gray-700 body-font dark:bg-gray-900" data-aos="fade-up">
    <div class="container px-5 py-12 md:py-20 mx-auto">
      <div class="flex flex-wrap w-full mt-7 mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-5xl text-3xl font-medium font-brand title-font mb-2 text-gray-500">
            Trending Sneakerz
          </h1>
          <div class="h-1 w-1/4 bg-green-500 rounded" />
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-base md:dark:text-green-500 dark:text-gray-400 font-medium text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a faucibus enim. Donec varius ante vitae sollicitudin elementum. Lorem ipsum dolor sit amet.ed a faucibus enim.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div v-for="trend in trendings" :key="trend.id" class="xl:w-1/4 md:w-1/2 p-4 group" data-aos="fade-up" data-aos-delay="100">
          <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg group-hover:scale-105 group-hover:shadow-lg transform duration-300 ease-out ">
            <img class="h-40 rounded w-full object-cover object-center mb-6" :src="'http://178.62.58.172' + trend.Imagen.url" alt="content">
            <h3 class=" dark:text-green-700 tracking-widest text-green-500 text-xs font-medium title-font">
              TOP VENTAS
            </h3>
            <h2 class=" dark:text-gray-400 text-lg text-gray-900 font-medium title-font mb-4">
              {{ trend.Titulo }}
            </h2>
            <p class="leading-relaxed text-base dark:text-gray-500">
              {{ trend.Descripcion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import trending from '~/apollo/queries/Trend/trending'
export default {
  name: 'Trending',
  data () {
    return {
      trendings: []
    }
  },
  apollo: {
    trendings: {
      prefetch: true,
      query: trending
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

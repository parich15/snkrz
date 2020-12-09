<template>
  <section class="text-gray-700 body-font dark:text-gray-200 dark:bg-gray-900">
    <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
      <div class=" md:pl-8 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font  lg:text-7xl text-green-700 text-5xl mb-4 font-medium text-shadow-sm font-brand2">
          SNKRZ
          <br>
          GARDEN
        </h1>
        <p class="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a faucibus enim. Donec varius ante vitae sollicitudin elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur ut risus eu fermentum. Duis quam tortor.
        </p>
        <div class="flex justify-center">
          <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none focus:ring-2 hover:bg-green-700 rounded text-lg focus:ring-green-100">
            Novedades
          </button>
          <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ml-4 inline-flex text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-green-500 border-0 py-2 px-6 focus:outline-none focus:ring-2 hover:bg-gray-300 rounded text-lg focus:ring-gray-100 ">
            Catálogo
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="../../static/img/PortadaHero.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>

</style>

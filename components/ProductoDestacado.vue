<template>
  <a to="#">
    <div class="flex flex-col xl:p-12">
      <div class="flex px-2">
        <img class=" rounded-lg" :src="enlace" alt="">
      </div>
      <div>
        <h3 class=" text-center font-brand text-base text-gray-700 my-3 lg:mt-3 lg:text-2xl dark:text-gray-400">
          {{ titulo }}
        </h3>
        <p class="hidden md:block text-center font-brand text-gray-600 text-sm mb-4 lg:text-xl lg:font-bold dark:text-gray-500">
          {{ desc }}
        </p>
        <h5 class=" text-center font-brand2 text-sm  text-green-700 font-bold dark:text-green-500">
          En Stock
        </h5>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProductoDestacado',
  props: {
    titulo: {
      type: String,
      default: 'Titulo Bamba'
    },
    desc: {
      type: String,
      default: 'Decripción Bamba'
    },
    enlace: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

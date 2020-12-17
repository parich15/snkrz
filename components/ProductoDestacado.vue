<template>
  <a to="#">
    <div class=" flex flex-col">
      <div class="mx-auto">
        <img class="lg:hidden" src="https://via.placeholder.com/100" alt="">
        <img class="hidden lg:block" src="https://via.placeholder.com/200" alt="">
      </div>
      <div>
        <h3 class=" text-center font-brand text-base text-gray-700 my-3 lg:mt-3 lg:text-2xl dark:text-gray-400">
          {{ titulo }}
        </h3>
        <p class="text-center font-body text-gray-800 text-sm mb-4 lg:text-xl lg:font-bold dark:text-gray-500">
          {{ desc }}
        </p>
      </div>
      <div>
        <h5 class=" text-center font-body text-sm  text-green-700 font-bold dark:text-green-500">
          Rating: {{ rating }} / 5
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
    rating: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

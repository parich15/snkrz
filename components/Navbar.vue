<template>
  <div class="w-full h-16 bg-gray-200 flex overflow-hidden">
    <div class="my-auto w-1/4">
      <img src="../static/img/hortetLogo.png" class="object-cover h-10 ml-1" alt="" srcset="">
    </div>
    <div class="w-1/2 my-auto flex justify-center">
      <input type="text" class="bg-gray-300 w-10/12  rounded-xl shadow-sm">
    </div>
    <div class="w-1/4 flex my-auto justify-around">
      <div>
        <fa icon="shopping-basket" class=" text-lg" />
      </div>
      <div>
        <fa icon="bars" class="text-lg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>

</style>

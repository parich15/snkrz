<template>
  <!-- TOPBAR -->
  <div class="w-full hidden h-9 items-center text-green-800 lg:flex bg-gray-200 justify-between font-body font-semibold px-6 dark:bg-gray-900 dark:text-green-400">
    <div class=" w-1/3">
      <a href="#">
        <fa icon="phone" />
        93 420 69 23
      </a>
      <a href="#" class="ml-4">
        <fa :icon="['fab','whatsapp']" />
        606 90 33 10
      </a>
    </div>
    <div class=" w-1/3 text-center">
      <h3 class="font-brand2 xl:text-lg">
        Registrate y obtén un 20% de descuento
      </h3>
    </div>
    <div class=" w-1/3 text-right">
      <h3>
        <fa icon="paper-plane" />
        Carrer dels Assaonadors 7; Barcelona
      </h3>
    </div>
  </div>
  <!-- FIN TOPBAR-->
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style lang="scss" scoped>

</style>

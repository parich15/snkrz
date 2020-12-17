<template>
  <section class="text-gray-700 body-font relative px-4 dark:bg-gray-800">
    <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
      <div class="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative lg:w1/2">
        <iframe
          class="absolute inset-0"
          title="mapa"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.454972204974!2d2.1781736153745683!3d41.38592477926424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fc1c027705%3A0x28591a928dc28cc9!2sCarrer%20dels%20Assaonadors%2C%207%2C%2008003%20Barcelona!5e0!3m2!1ses!2ses!4v1608054938032!5m2!1ses!2ses"
          width="100%"
          height="100%"
          frameborder="0"
        />
        <div class="bg-white relative flex flex-wrap py-6 dark:bg-gray-700">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm dark:text-gray-300">
              DIRECCIÓN
            </h2>
            <p class="leading-relaxed dark:text-green-500">
              Carrer dels Assaonadors 7, 08003 Barcelona
            </p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm dark:text-gray-300">
              EMAIL
            </h2>
            <a class="text-green-500 leading-relaxed">snkrzgarden@email.com</a>
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm dark:text-gray-300 mt-4">
              TELÉFONO
            </h2>
            <p class="leading-relaxed dark:text-green-500">
              123-456-7890
            </p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto md:mr-20 w-full md:py-8 mt-8 md:mt-0 dark:bg-gray-800">
        <h2 class="text-2xl mb-1 font-medium title-font font-brand lg:text-4xl text-gray-400">
          Ponte en Contacto
        </h2>
        <div class="h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-700">
          <div class=" w-1/5 h-full bg-green-700 dark:bg-green-500" />
        </div>
        <p class="leading-relaxed mb-5 text-gray-500 mt-4 font-body font-bold text-sm antialiased ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quis nemo doloremque laudantium.
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600 dark:text-green-500 font-bold font-brand2">Nombre</label>
          <input id="name" type="text" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-900 dark:border-gray-700">
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600 dark:text-green-500 font-bold font-brand2">Email</label>
          <input id="email" type="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-900 dark:border-gray-700">
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600 dark:text-green-500 font-bold font-brand2">Mensaje</label>
          <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-gray-900 dark:border-gray-700" />
        </div>
        <button class="text-white bg-green-500 border-0 ease-in duration-200 transform hover:scale-105 transition py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
          Enviar Solicitud
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Snkrz Garden, todos los derechos reservados
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactoInicio'
}
</script>

<style lang="scss" scoped>

</style>

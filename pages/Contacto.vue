<template>
  <section class=" dark:bg-gray-800">
    <div class=" flex flex-col-reverse sm:flex-col">
      <div class=" w-full overflow-hidden flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4549722049787!2d2.178173615425736!3d41.38592477926416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a341b99076c5%3A0x1f7bc653aa85c64f!2sSNKRZ%20GARDEN!5e0!3m2!1ses!2ses!4v1608628308152!5m2!1ses!2ses"
          width="450"
          height="620"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          class=" md:hidden"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4549722049787!2d2.178173615425736!3d41.38592477926416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a341b99076c5%3A0x1f7bc653aa85c64f!2sSNKRZ%20GARDEN!5e0!3m2!1ses!2ses!4v1608628308152!5m2!1ses!2ses"
          width="1920"
          height="400"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          class=" hidden md:block"
        />
      </div>
      <div class="md:flex items-center md:px-4">
        <div class="container my-6 px-3 md:w-1/2">
          <h3 class=" font-brand text-3xl text-shadow-sm text-green-700 dark:text-green-500">
            Contacta con nosotros
          </h3>
          <hr class=" border-gray-300 w-1/3 border-2 my-2 bg-gray-300 dark:border-gray-600">
          <h5 class=" font-brand2 text-sm text-gray-400 dark:text-gray-500">
            Snkrz Garden - Barcelona
          </h5>
          <div class=" pt-2">
            <p class=" font-body antialiased dark:text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti officiis exercitationem hic totam obcaecati tempora. Et molestiae, dolorum, tempora, fuga fugiat dolorem assumenda blanditiis.
            </p>
          </div>
          <div class="py-6">
            <h3 class=" font-brand text-2xl text-green-700 dark:text-green-500">
              Horarios
            </h3>
            <h5 class=" font-brand2 text-sm text-gray-500">
              Abrimos en las siguientes franjas
            </h5>
            <div class="flex justify-around pt-4">
              <div>
                <p class=" font-brand text-green-500 ">
                  Lunes a Viernes
                </p>
                <span class=" font-brand text-gray-500 dark:text-gray-400 ">
                  11:00 - 21:00
                </span>
              </div>
              <div>
                <p class=" font-brand text-green-500 ">
                  Sábado y Festivos
                </p>
                <span class=" font-brand text-gray-500 dark:text-gray-400 ">
                  11:00 - 17:00
                </span>
              </div>
            </div>
          </div>
          <div class="py-2 sm:hidden">
            <h3 class=" font-brand text-2xl text-green-700">
              Formulario
            </h3>
            <h5 class=" font-brand2 text-sm text-gray-500">
              Envíanos tu solicitud de contacto
            </h5>
            <div class="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-800 flex flex-col md:ml-auto w-full md:py-8 mt-4 md:mt-0">
              <form @submit.prevent="enviarMensaje">
                <div class="relative mb-4">
                  <label for="name" class="leading-7 text-sm text-gray-400 font-brand2">Nombre</label>
                  <input
                    id="name"
                    v-model="Nombre"
                    required
                    type="text"
                    name="name"
                    class="w-full bg-white dark:bg-gray-900  dark:border-gray-700 dark:focus:border-green-500 rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-400 font-brand2">Email</label>
                  <input
                    id="email"
                    v-model="Email"
                    required
                    type="email"
                    name="email"
                    class="w-full bg-white dark:bg-gray-900  dark:border-gray-700 dark:focus:border-green-500 rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                </div>
                <div class="relative mb-4">
                  <label for="tel" class="leading-7 text-sm text-gray-400 font-brand2">Telefono</label>
                  <input
                    id="tel"
                    v-model="Telefono"
                    required
                    type="number"
                    name="tel"
                    class="w-full bg-white dark:bg-gray-900  dark:border-gray-700 dark:focus:border-green-500 rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                </div>
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-400 font-brand2">Tu Mensaje</label>
                  <textarea id="message" v-model="Mensaje" name="message" class="w-full bg-white dark:bg-gray-900  dark:border-gray-700 dark:focus:border-green-500 rounded border border-gray-300 focus:border-green-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                </div>
                <div v-if="correcto">
                  <p>
                    Genial! Tu mensaje se ha enviado correctamente.<br>
                    Pronto nos pondremos en contacto contigo.
                  </p>
                </div>
                <div v-else>
                  <button class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg font-brand">
                    {{ cargando ? "Enviando..." : 'Enviar Solicitud' }}
                  </button>
                  <div v-if="errores" class="my-3">
                    Algo ha ido mal; has rellenado correctamente los campos?
                  </div>
                  <div
                    v-if="cargando"
                    class="NotificacionCarga rounded bg-orange-500 text-white text-lg p-4"
                  >
                    Si tarda mucho en cargar, recarga la página o ponte en contacto a través de Whatsapp.
                  </div>
                  <p class="text-xs text-gray-500 mt-3">
                    Snkrz Garden, todos los derechos reservados.
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div class=" py-4">
            <p class=" py-2 my-2 bg-green-400 text-gray-100 rounded-md pl-4 font-brand2 text-sm dark:bg-green-500">
              <fa class=" text-green-700 dark:text-green-900" icon="paper-plane" />
              Carrer dels Assaonadors, 7
            </p>
            <p class=" py-2 my-2 bg-green-400 text-gray-100 rounded-md pl-4 font-brand2 text-sm dark:bg-green-500">
              <fa class=" text-green-700 dark:text-green-900" icon="phone" />
              93 420 69 23 | 606 90 33 10
            </p>
            <p class=" py-2 my-2 bg-green-400 text-gray-100 rounded-md pl-4 font-brand2 text-sm dark:bg-green-500">
              <fa class=" text-green-700 dark:text-green-900" icon="at" />
              snkrzgarden@jordan.com
            </p>
          </div>
        </div>
        <div class="hidden w-1/2 md:block px-6">
          <form @submit.prevent="enviarMensaje">
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-400 font-brand2">Nombre</label>
              <input
                id="name"
                v-model="Nombre"
                required
                type="text"
                name="name"
                class="w-full bg-white dark:bg-gray-900  dark:border-gray-700 dark:focus:border-green-500 rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400 font-brand2">Email</label>
              <input
                id="email"
                v-model="Email"
                required
                type="email"
                name="email"
                class="w-full bg-white dark:bg-gray-900  dark:border-gray-700 dark:focus:border-green-500 rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
            <div class="relative mb-4">
              <label for="tel" class="leading-7 text-sm text-gray-400 font-brand2">Telefono</label>
              <input
                id="tel"
                v-model="Telefono"
                required
                type="number"
                name="Tel"
                class="w-full bg-white dark:bg-gray-900  dark:border-gray-700 dark:focus:border-green-500 rounded border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400 font-brand2">Tu Mensaje</label>
              <textarea id="message" v-model="Mensaje" name="message" class="w-full bg-white dark:bg-gray-900  dark:border-gray-700 dark:focus:border-green-500 rounded border border-gray-300 focus:border-green-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
            </div>
            <div v-if="correcto">
              <p>
                Genial! Tu mensaje se ha enviado correctamente.<br>
                Pronto nos pondremos en contacto contigo.
              </p>
            </div>
            <div v-else>
              <button type="submit" class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg font-brand">
                {{ cargando ? "Enviando..." : "Enviar Solicitud" }}
              </button>
              <div v-if="errores" class="my-3">
                Algo ha ido mal; has rellenado correctamente los campos?
              </div>
              <div
                v-if="cargando"
                class="NotificacionCarga rounded bg-orange-500 text-white text-lg p-4"
              >
                Si tarda mucho en cargar, recarga la página o ponte en contacto a través de Whatsapp.
              </div>
              <p class="text-xs text-gray-500 mt-3">
                Snkrz Garden, todos los derechos reservados.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacto',
  data () {
    return {
      Nombre: '',
      Email: '',
      Telefono: '',
      Mensaje: '',
      cargando: false,
      correcto: false,
      errores: false
    }
  },
  methods: {
    enviarMensaje () {
      this.cargando = true
      this.$axios
        .post('http://178.62.58.172/Formularios', {
          Nombre: this.Nombre,
          Email: this.Email,
          Telefono: this.Telefono,
          Mensaje: this.Mensaje
        })
        .then(() => {
          this.correcto = true
          this.errores = false
        })
        .catch(() => {
          this.errores = true
        })
        .finally(() => {
          this.cargando = false
          this.Nombre = ''
          this.Email = ''
          this.Telefono = ''
          this.Mensaje = ''
        })
    }
  }

}
</script>

<style lang="css" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
.NotificacionCarga{
    animation: 5s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }

}
</style>

<template>
  <div class="sticky top-0 z-50">
    <!-- CABECERA -->
    <header class="bg-gray-100 z-50 sm:flex sm:justify-between sm:items-center dark:bg-gray-800">
      <div class=" flex justify-between items-center px-4 py-1">
        <div class="logo">
          <NuxtLink to="/">
            <img v-if="!oscuro" src="../static/img/Logo.png" class=" h-20 md:h-24 lg:h-28 w-auto object-cover " alt="Logo Snkrz Garden" srcset="">
            <img v-if="oscuro" src="../static/img/LogoDark.png" class=" h-20 md:h-24 lg:h-28 w-auto object-cover " alt="Logo Snkrz Garden" srcset="">
          </NuxtLink>
        </div>
        <div class="my-auto flex">
          <button type="button" class="block text-dark focus:outline-none sm:hidden" @click="abierto = !abierto">
            <svg
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background:new 0 0 512 512;"
              xml:space="preserve"
              class="h-8 w-8 "
            >
              <path v-if="abierto" style="fill:#07420c;transform:translateX(10%);transform:translateY(10%)" d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
              <path v-if="!abierto" style="fill:#07420c;" d="M479.18,91.897H32.821C14.69,91.897,0,77.207,0,59.077s14.69-32.821,32.821-32.821H479.18   c18.13,0,32.82,14.69,32.82,32.821S497.31,91.897,479.18,91.897z" />
              <path v-if="!abierto" style="fill:#07420c;" d="M295.385,288.821H32.821C14.69,288.821,0,274.13,0,256s14.69-32.821,32.821-32.821h262.564   c18.13,0,32.821,14.69,32.821,32.821S313.515,288.821,295.385,288.821z" />

              <path v-if="!abierto" style="fill:#396e35;" d="M479.18,288.821h-52.513c-18.13,0-32.821-14.69-32.821-32.821s14.69-32.821,32.821-32.821h52.513  c18.13,0,32.82,14.69,32.82,32.821S497.31,288.821,479.18,288.821z" />
              <path v-if="!abierto" style="fill:#07420c;" d="M479.18,485.744H32.821C14.69,485.744,0,471.053,0,452.923c0-18.13,14.69-32.821,32.821-32.821  H479.18c18.13,0,32.82,14.69,32.82,32.821C512,471.053,497.31,485.744,479.18,485.744z" />
            </svg>
          </button>
        </div>
      </div>
      <div id="Menu" class="lg:mx-3">
        <transition
          enter-active-class="transition ease-out duration-100 transform"
          enter-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75 transform"
          leave-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div :class="abierto ? 'block' : 'hidden'" class="sm:flex sm:px-1">
            <div class="px-12 pt-1 lg:pt-0 pb-4 sm:flex sm:px-1 sm:pb-0">
              <NuxtLink to="/Catalogo" class="dark:text-green-500 dark:hover:bg-gray-600   transition duration-300 ease-in block sm:px-3 text-green-800 font-brand rounded hover:bg-gray-200 font-semibold text-xl text-center py-3">
                Catálogo
              </NuxtLink>
              <NuxtLink to="/SobreNosotros" class="dark:text-green-500 dark:hover:bg-gray-600   transition duration-300 ease-in block sm:px-3 text-green-800 font-brand rounded hover:bg-gray-200 font-semibold text-xl text-center py-3">
                Sobre Nosotros
              </NuxtLink>
              <NuxtLink to="/Contacto" class="dark:text-green-500 dark:hover:bg-gray-600   transition duration-300 ease-in block sm:px-3 text-green-800 font-brand rounded hover:bg-gray-200 font-semibold text-xl text-center py-3">
                Contacto
              </NuxtLink>
            </div>
            <div class="flex justify-around items-center w-full sm:hidden lg:flex sm:w-auto">
              <div class="my-2 md:my-0 text-center font-brand text-gray-600 border-r border-gray-400 w-1/2">
                <a href="#" class=" transition  dark:hover:text-gray-300 dark:hover:bg-gray-700 lg:text-xl duration-300 ease-in mx-8 lg:mx-2 lg:px-5 py-1 block rounded hover:bg-gray-200">Login</a>
              </div>
              <div class="my-2 md:my-0 text-center font-brand text-gray-600 w-1/2 lg:w-full">
                <a href="#" class=" transition  dark:hover:text-gray-300 dark:hover:bg-gray-700 lg:text-xl duration-300 ease-in mx-8 lg:mx-2 lg:px-5 py-1 block hover:bg-gray-200 rounded">Noticias</a>
              </div>
            </div>
            <div class=" flex w-full justify-center items-center py-6 sm:hidden">
              <div>
                🌞
              </div>
              <div class="relative inline-block w-10 mx-4 align-middle select-none transition duration-200 ease-in">
                <input
                  id="toggle"
                  type="checkbox"
                  name="toggle"
                  class="focus:outline-none toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  @click="toggle()"
                >
                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer focus:outline-none" />
              </div>
              <div>
                🌙
              </div>
            </div>
            <div class="hidden lg:flex items-center">
              <div class=" relative ">
                <div v-click-outside="esconder">
                  <button type="button" class=" px-2 py-2 hover:bg-gray-200 rounded transition ease-in duration-500 text-gray-500 focus:text-green-700 focus:outline-none" @click="submenu = !submenu">
                    <svg
                      id="Opciones"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 477.08 477.08"

                      xml:space="preserve"
                      class="h-6 w-6 fill-current "
                    >
                      <path d="M477.064,203.08c0-10.801-8.759-19.56-19.56-19.56h-40.182c-3.487-11.337-8.061-22.175-13.526-32.48l28.465-28.465   c3.673-3.673,5.731-8.65,5.731-13.837s-2.066-10.164-5.731-13.837l-50.128-50.106c-7.641-7.64-20.026-7.64-27.667,0l-28.465,28.465   c-10.303-5.459-21.143-10.024-32.472-13.511V19.575c0-10.809-8.759-19.567-19.568-19.567h-70.86   c-10.801,0-19.56,8.759-19.56,19.567V59.75c-11.337,3.486-22.184,8.06-32.488,13.518l-28.457-28.458   c-7.633-7.64-20.025-7.64-27.666-0.008L44.818,94.916c-7.633,7.633-7.633,20.041,0,27.673l28.458,28.458   c-5.466,10.297-10.04,21.143-13.526,32.472h-40.19C8.759,183.52,0,192.279,0,203.087v70.876c0,10.801,8.759,19.56,19.559,19.56   h40.182c3.479,11.337,8.052,22.184,13.518,32.478L44.802,354.46c-7.64,7.641-7.64,20.034,0,27.673l50.114,50.114   c7.64,7.641,20.033,7.641,27.674,0l28.443-28.443c10.311,5.475,21.166,10.049,32.51,13.534v40.167   c0,10.809,8.759,19.566,19.56,19.566h70.86c10.809,0,19.568-8.757,19.568-19.566v-40.167c11.345-3.486,22.199-8.059,32.51-13.534   l28.451,28.451c3.673,3.672,8.649,5.729,13.836,5.729c5.187,0,10.165-2.058,13.836-5.729l50.106-50.106   c7.633-7.641,7.633-20.034,0-27.665l-28.465-28.466c5.474-10.303,10.047-21.158,13.526-32.494h40.182   c5.187,0,10.165-2.058,13.836-5.731c3.665-3.672,5.731-8.649,5.731-13.836L477.064,203.08z M238.532,362.683   c-68.446,0-124.134-55.689-124.134-124.143c0-68.446,55.688-124.134,124.134-124.134c68.454,0,124.143,55.688,124.143,124.134   C362.675,306.994,306.986,362.683,238.532,362.683z" />
                      <path d="M238.532,146.21c-50.912,0-92.329,41.417-92.329,92.329c0,50.914,41.417,92.339,92.329,92.339   c50.914,0,92.339-41.425,92.339-92.339C330.871,187.627,289.446,146.21,238.532,146.21z" />
                    </svg>
                  </button>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100 transform"
                  enter-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75 transform"
                  leave-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <div v-show="submenu" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" class="block  py-2 text-sm text-center font-brand text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-green-500 dark:hover:bg-gray-700 " role="menuitem">Soporte</a>
                      <a href="#" class="block  py-2 text-sm text-center font-brand text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-green-500 dark:hover:bg-gray-700 " role="menuitem">Pregntas Frecuentes</a>
                      <div class="flex justify-center py-2">
                        <div>
                          🌞
                        </div>
                        <div class="relative inline-block w-10 mx-4 align-middle select-none transition duration-200 ease-in">
                          <input
                            id="toggle"
                            type="checkbox"
                            name="toggle"
                            class="focus:outline-none toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            @click="toggle()"
                          >
                          <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer focus:outline-none" />
                        </div>
                        <div>
                          🌙
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import vClickOutside from 'v-click-outside'
export default {
  name: 'Navbar',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      abierto: false,
      submenu: false
    }
  },
  computed: {
    ...mapGetters({ oscuro: 'getOscuro' })
  },
  methods: {
    ...mapMutations({ toggle: 'toggle' }),
    esconder () {
      this.submenu = false
    }
  }

}
</script>

<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}
</style>

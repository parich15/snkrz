<template>
  <div class="dark:bg-gray-800">
    <div class="carousel relative " style="max-width:auto;">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input
          id="carousel-1"
          class="carousel-open"
          type="radio"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        >
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" :style="{backgroundImage: 'url(http://178.62.58.172' + carrousels[0].Imagen.url + ')'}">
            <div class="container mx-auto flex justify-center items-center md:block">
              <div class="flex flex-col w-10/12 text-center lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p class="font-brand text-3xl text-gray-200 mb-4">
                  {{ carrousels[0].Titulo }}
                </p>
                <NuxtLink :to="{path:`/Catalogo/${carrousels[0].NumId}`}">
                  <p class="boton-carousel">
                    Ver Sneaker
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-green-500 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-green-500 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 2-->
        <input
          id="carousel-2"
          class="carousel-open"
          type="radio"
          name="carousel"
          aria-hidden="true"
          hidden=""
        >
        <div class="carousel-item absolute opacity-0 bg-cover bg-right" style="height:50vh;">
          <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" :style="{backgroundImage: 'url(http://178.62.58.172' + carrousels[1].Imagen.url + ')'}">
            <div class="container mx-auto flex justify-center items-center md:block">
              <div class="flex flex-col w-10/12 text-center lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p class="font-brand text-3xl text-gray-200 mb-4">
                  {{ carrousels[1].Titulo }}
                </p>
                <NuxtLink :to="{path:`/Catalogo/${carrousels[1].NumId}`}">
                  <p class="boton-carousel">
                    Ver Sneaker
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 3-->
        <input
          id="carousel-3"
          class="carousel-open"
          type="radio"
          name="carousel"
          aria-hidden="true"
          hidden=""
        >
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
          <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center" :style="{backgroundImage: 'url(http://178.62.58.172' + carrousels[2].Imagen.url + ')'}">
            <div class="container mx-auto flex justify-center items-center md:block">
              <div class="flex flex-col w-10/12 text-center lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p class="font-brand text-3xl text-gray-200 mb-4">
                  {{ carrousels[2].Titulo }}
                </p>
                <NuxtLink :to="{path:`/Catalogo/${carrousels[2].NumId}`}">
                  <p class="boton-carousel">
                    Ver Sneaker
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
          </li>
        </ol>
      </div>

      <section class="bg-white py-8 dark:bg-gray-800">
        <div class=" flex items-center flex-wrap pt-4 pb-12">
          <nav id="BarraBusqueda" class="w-full z-30 top-0 px-6 py-1 ">
            <div id="ContenedorBusqueda" class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3 focus-within:ring-2 focus-within:ring-gray-100 rounded">
              <div class="flex items-center lg:justify-between lg:mx-6 w-full ">
                <input v-model="query" type="text" placeholder="Buscar..." class="md:flex-grow w-1/2 md:w-2/3 outline-none font-brand text-2xl md:text-5xl tracking-widest text-gray-400 bg-transparent focus:text-green-500">
                <div class="flex items-baseline justify-end w-1/2">
                  <div class="pl-3 text-gray-400 inline-block no-underline hover:text-green-500 dark:text-white dark:hover:text-green-500">
                    <button class="focus:outline-none" @click="limpiarBusqueda()">
                      <svg class="fill-current md:w-8 w-6 hover:text-green-500 dark:hover:text-green-500 " viewBox="0 0 20 20">
                        <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z" />
                      </svg>
                    </button>
                  </div>
                  <div v-click-outside="esconder" class="relative">
                    <div class="pl-3 text-gray-400 inline-block no-underline hover:text-green-500 dark:text-white dark:hover:text-green-500 ">
                      <button type="button" class="focus:outline-none" @click="filtros = !filtros">
                        <svg class="fill-current md:w-9 w-7 hover:text-green-500 dark:hover:text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
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
                      <div v-show="filtros" class=" focus-within:ring-2 focus-within:ring-green-200 origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                        <select id="1" v-model="query" name="Marcas" class="outline-none text-black">
                          <option value="" disabled selected>
                            Selecciona una marca
                          </option>
                          <option v-for="marca in marcas" :key="marca.id">
                            {{ marca.Marca }}
                          </option>
                        </select>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div v-for="snkrz in listaFiltrada" :key="snkrz.id" class="2xl:p-7 flex flex-col md:w-1/3 p-6 w-full xl:w-1/4">
            <NuxtLink :to="{name:'Catalogo-id', params: { id: snkrz.id }}">
              <img class="2xl:w-full h-56 hover:grow hover:shadow-lg md:w-96 object-cover md:object-contain lg:object-cover rounded-lg w-full" :src="'http://178.62.58.172' + snkrz.Imagen.url">
              <div class="pt-3 flex items-center justify-between">
                <p class=" dark:text-gray-400 font-brand md:text-xl text-3xl text-gray-600">
                  {{ snkrz.Titulo }}
                </p>
              </div>
              <div v-if="snkrz.Stock" class="flex flex-col md:flex-row justify-between md:my-0 md:block">
                <p class="pt-1 text-green-700 font-bold text-xs dark:text-green-500 font-brand2 mb-2">
                  Disponible
                </p>
                <div class="flex w-full justify-between items-center 2xl:w-full">
                  <div class=" w-full">
                    <p class=" font-brand text-3xl md:text-2xl text-green-500 text-left 2xl:text-3xl">
                      {{ snkrz.Precio }} €
                    </p>
                  </div>
                </div>
              </div>
              <div v-else>
                <p class="pt-1 text-red-700 font-bold text-xs font-brand2 mb-2">
                  Sin stock
                </p>
                <p class=" font-brand text-2xl text-gray-400">
                  Precio no disponible
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
      <div v-if="listaFiltrada.length == 0" class="p-4">
        <div class="p-4">
          <h3 class="lg:text-5xl text-3xl text-green-600 font-brand text-center">
            No hay resultados
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import snkrzQuery from '~/apollo/queries/Catalogo/snkrzQuery'
import marcaQuery from '~/apollo/queries/Catalogo/marcaQuery'
import carrouselQuery from '~/apollo/queries/Catalogo/carrouselQuery'
export default {
  name: 'Catalogo',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      snkrzs: [],
      query: '',
      filtros: false,
      marcas: [],
      carrousels: []
    }
  },
  apollo: {
    snkrzs: {
      prefetch: true,
      query: snkrzQuery
    },
    marcas: {
      prefetch: true,
      query: marcaQuery
    },
    carrousels: {
      prefetch: true,
      query: carrouselQuery
    }
  },
  computed: {
    listaFiltrada () {
      return this.snkrzs.filter((snkrz) => {
        return snkrz.Titulo.toLowerCase().includes(this.query.toLowerCase()) || snkrz.Marca[0].Marca.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
  methods: {
    esconder () {
      this.filtros = false
    },
    limpiarBusqueda () {
      this.query = ''
    }
  }
}
</script>

<style scoped>
        .boton-carousel{
          @apply font-brand2 text-base bg-green-600 py-2 px-3 text-center rounded-lg text-white transition transform ease-in-out duration-200 hover:scale-105 hover:shadow-lg
        }
        .hover\:grow {
            transition: all 0.3s;
            transform: scale(1);
        }

        .hover\:grow:hover {
            transform: scale(1.02);
        }

        .carousel-open:checked + .carousel-item {
            position: static;
            opacity: 100;
        }

        .carousel-item {
            -webkit-transition: opacity 0.6s ease-out;
            transition: opacity 0.6s ease-out;
        }

        #carousel-1:checked ~ .control-1,
        #carousel-2:checked ~ .control-2,
        #carousel-3:checked ~ .control-3 {
            display: block;
        }

        .carousel-indicators {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: 2%;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 10;
        }

        #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
        #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
        #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
            color: #129156;
        }
        /* Barra Busqueda */
         @media (min-width:320px) and (max-width:370px) {
          #BarraBusqueda {
            position: sticky;
            top:10vh
          }
          #ContenedorBusqueda{
            background-color: #ffffffc7;
            backdrop-filter: blur(7px);
          }
        }
         @media (min-width:375px) and (max-width:500px) {
          #BarraBusqueda {
            position: sticky;
            top:9.5vh
          }
          #ContenedorBusqueda{
            background-color: #ffffffc7;
            backdrop-filter: blur(7px);
          }
        }
         @media (min-width:500px) and (max-width:1024px) {
          #BarraBusqueda {
            position: sticky;
            top:11.5vh
          }
          #ContenedorBusqueda{
            background-color: #ffffffc7;
            backdrop-filter: blur(7px);
          }
        }
        @media (min-width:1024px) and (max-width:1450px) {
          #BarraBusqueda {
            position: sticky;
            top:16vh
          }
          #ContenedorBusqueda{
            background-color: #ffffffc7;
            backdrop-filter: blur(7px);
          }
        }
        @media (min-width:1450px) and (max-width:1900px) {
          #BarraBusqueda {
            position: sticky;
            top:14.5vh
          }
          #ContenedorBusqueda{
            background-color: #ffffffc7;
            backdrop-filter: blur(7px);
          }
        }
         @media (min-width:1900px) and (max-width:2600px) {
          #BarraBusqueda {
            position: sticky;
            top:10vh
          }
          #ContenedorBusqueda{
            background-color: #ffffffc7;
            backdrop-filter: blur(7px);
          }
        }

</style>

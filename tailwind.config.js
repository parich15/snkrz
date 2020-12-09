module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ["Raleway"],
        body: ["Open Sans"],
        especial:["Permanent Marker"],
        brand:["Evogria"],
        brand2:["Heavitas"]
      },
      backgroundImage: theme => ({
        'imagen-inicio': "url('/img/InicioSnkrz.jpg')"
      })
    },
  },
  variants: {
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
  purge:{
    enabled: process.env.NODE_ENV === 'production',
    content:[
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ]
  }

}

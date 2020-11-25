module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ["Raleway"],
        body: ["Open Sans"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
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

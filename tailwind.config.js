module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "144":"450px"},
        fontFamily:{
          Oswald:[ 'Oswald', 'sans-serif']
        },
        boxShadow:{
          "3xl": "25px 40px 60px -12px rgba(0, 0, 0, .25)"
        },
        colors:{
          'regid-purple':" #728AB7A6 "
        }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jpg}"],
  theme: {
    extend: {
      backgroundImage: { tattoo: "url('../sherman-yang-zOyOWsANHXo-unsplash.jpg" },
      fontFamily: { neon: ['NEON'], retro: ['Retro']},
      screens: { 'sm' : '450px'}
    },
  },
  plugins: [],
}

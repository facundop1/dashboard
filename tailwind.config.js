/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
<<<<<<< HEAD
        "sideboard-pfp": "url('/src/assets/foto-perfil.jpg')",
        "upboard-menu": "url('/src/assets/menu.png')",
        "logo": "url('/src/assets/favicon.png')",
=======
        "sideboard-pfp": "url('/src/assets/profile-user.png')",
>>>>>>> b992b2b7049572d255c5a1f30cf7c20d9e11f444
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}


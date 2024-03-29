/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sideboard-pfp": "url('/src/assets/profile-user.png')",
        "upboard-menu": "url('/src/assets/menu.png')",
        "logo": "url('/src/assets/favicon.png')",
        "sideboard-correo": "url('/src/assets/correo.png')",
        "sideboard-noti": "url('/src/assets/notificacion.png')",
        "sideboard-cross": "url('/src/assets/close.png')",
        "login-user": "url('/src/assets/user.png')",
        "login-password": "url('/src/assets/password.png')",
        "deletepost-trash": "url('/src/assets/delete.png')",
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
      },
    },
  },
  plugins: [],
}


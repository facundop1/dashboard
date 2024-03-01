/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sideboard-pfp": "url('/src/assets/profile-user.png')",
      },
    },
  },
  plugins: [],
}


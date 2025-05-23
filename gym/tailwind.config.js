/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'Js/script.js', 'login.html','register.html','manage.html','create.html','view.html'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'select-arrow': 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTExLjk5OTcgMTMuMTcxNEwxNi45NDk1IDguMjIxNjhMMTguMzYzNyA5LjYzNTg5TDExLjk5OTcgMTUuOTk5OUw1LjYzNTc0IDkuNjM1ODlMNy4wNDk5NiA4LjIyMTY4TDExLjk5OTcgMTMuMTcxNFoiIGZpbGw9InJnYmEoMTU2LDE2MywxNzUsMSkiPjwvcGF0aD48L3N2Zz4=")'
      },
      colors: {
        primary : '#0F9F6E',
        background : '#F9FAFC',
        secondary : 'rgb(231,246,241)',
        third : '#F8F8F8',
        fourth : '#F1F2F4',
        fifth : '#5C09E3'
      },
    },
  },
  plugins: [],
}


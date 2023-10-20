/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'overlay': 'rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'banner': "url('/dist/img/banner.png')"
      },
      backgroundPosition: {
        'center-center': 'center center',
        // 'left-left': '-14rem 0rem'
      },
      margin: {
        'top-center': '6em auto',
      }
    },
  },
  plugins: [],
}


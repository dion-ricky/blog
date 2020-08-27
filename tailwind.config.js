module.exports = {
    purge: [
      './src/**/*.html'
    ],
    theme: {
        fontFamily: {
            yeseva: ['Yeseva One', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            body: ['Nunito Sans', 'sans-serif'],
        },
        extend: {
          colors: {
            dark: {
              green: '#011003'
            },
            greenish: {
              white: '#EFF8F0'
            },
            nature: {
              frost: '#FAFDFA'
            }
          }
        }
    },
    variants: {},
    plugins: [],
  }
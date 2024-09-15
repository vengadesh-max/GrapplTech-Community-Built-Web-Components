const { Container } = require("postcss");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary : "#aa6d6b",
        brandDark : "#151616",
      },

      fontFamily:{
        poppins:["Poppins","sans-serif"],
        varela : ["Varela Round","sans-serif"],
      },

      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        },
      },
    },
  },
  plugins: [],
}

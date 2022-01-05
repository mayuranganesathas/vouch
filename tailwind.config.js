module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        VouchGreen: "#49BEB0",
        VouchDark: "#006d77",
        VouchMed: "#83c5be",
      },
      borderRadius: {
        large: "12px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

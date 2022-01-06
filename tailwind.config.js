module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        VouchGreen: "#B5E5CF",
        VouchDark: "#3D5B59",
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

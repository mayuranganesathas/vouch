module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        VouchGreen: "#49beb0",
        VouchDark: "#3D5B59",
        VouchLight: "#d6f2ef",
        VouchSalmon: "#fff2eb",
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

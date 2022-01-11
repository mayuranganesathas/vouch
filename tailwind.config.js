module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        VouchGreen: "#78baa0",
        VouchDark: "#005632",
        VouchLight: "#d6f2ef",
        VouchSalmon: "#ffbbce",
        VouchBg: "#fff9f0",
        VouchYellow: "#ffd745",
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

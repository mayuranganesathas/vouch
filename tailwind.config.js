module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    extend: {
      animation: {
        shake: "shake 0.5s ease-in-out",
        hit: "hit 1s ease-in-out",
        fadeIn: "fadeIn 2s ease-in-out",
        myMove: "myMove 3s ",
        myHide: "myHide 0.5s",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%, 75%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        hit: {
          "0%, 100%": { transform: "scale(1) translate(0px, 0px)" },
          "25%, 75%": { transform: "scale(1.25) translate(-30px, 0px)" },
          "50%": { transform: "scale(1.5) translate(-75px, 0px)" },
        },
        fadeIn: {
          "0%": { opacity: "0.1" },
          "25%": { opacity: "0.25" },
          "50%": { opacity: "0.5" },
          "75%": { opacity: "0.75" },
          "100%": { opacity: "1" },
        },
        myMove: {
          "0%": {
            transform: "scale(1) translate(0px, 0px)",
          },
          "25%": { opacity: "0.75", color: "white" },

          "50%": { opacity: "1", color: "white" },

          "100%": {
            transform: "scale(1.25) translate(0.4px, 16px)",
            color: "white",
          },
          myHide: {
            "0%, 100%": { opacity: "1", color: "white" },
          },
        },
      },

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

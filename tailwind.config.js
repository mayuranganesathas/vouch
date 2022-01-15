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
        myMove: "myMove 0.5s ",
        myHide: "myHide 0.5s",
        bgFadeIn: "backGroundHide 2s ease-in-out",
        fadeColorIn: "fadeColorIn 0.7s",
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
        fadeColorIn: {
          "0%": { opacity: "0.25", color: "#FFFFFF" },
          "25%": { opacity: "1", color: "#FFFFFF" },
          "50%": { opacity: "1", color: "#FFFFFF" },
          "75%": { opacity: "1", color: "#FFFFFF" },
          "100%": { opacity: "1", color: "#FFFFFF" },
        },
        myMove: {
          "0%": {
            transform: "scale(1) translate(0px, 0px)",
            opacity: "0.25",
            color: "#78baa0",
          },
          "25%": { opacity: "0.75", color: "#78baa0" },

          "50%": { opacity: "1", color: "#FFFFFF" },

          "100%": {
            transform: "scale(1.25) translate(0.4px, 16px)",
            color: "#FFFFFF",
          },
        },
        myHide: {
          "0%": {
            transform: "scale(1) translate(0px, 0px)",
            opacity: "0.25",
            color: "transparent",
          },
          "25%": { opacity: "1", color: "transparent" },

          "50%": { opacity: "1", color: "transparent" },

          "100%": {
            color: "transparent",
          },
        },
        backGroundHide: {
          "0%": {
            opacity: "0.25",
            bgcolor: "#000000",
          },
          "25%": { opacity: "1", bgcolor: "#000000" },

          "50%": { opacity: "1", bgcolor: "#000000" },

          "100%": {
            bgcolor: "#000000",
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

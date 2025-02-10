module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideIn: "slideIn 1s ease-out",
        textPop:"textPop 1s "
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        textPop: {
          '0%, 100%': { transform: 'scale(1)', color: '#a855f7' },
          '50%': { transform: 'scale(1.2)', color: '#d946ef' },
        },

      },
    },
  },
  plugins: [],
};

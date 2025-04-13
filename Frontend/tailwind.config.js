// /** @type {import('tailwindcss').Config} */
// export default {
//     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//     darkMode: "class",
//     theme: {
//         extend: {},
//     },
//     plugins: [require("daisyui")],
// };

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        keyframes: {
          'scroll-left': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          'scroll-left': 'scroll-left 15s linear infinite',
        },
      },
    },
    plugins: [require("daisyui")],
  };
  
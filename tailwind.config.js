/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#0062CC', // or '#10B981' for green
        // primary: '#10B981' ,
        secondary: '#6B7280', // or '#A855F7' for earthy tone
        darkGray: '#1F2937',
        mediumGray: '#374151',
        lightGray: '#F3F4F6',
        offWhite: '#E5E7EB',
        "black-1": '#111827',
        "black-2": '#1F2937',
        "black-3": '#374151',
      },
      fontFamily: {
        // heading: ['Montserrat', 'sans-serif'],
        heading: ["Raleway", 'sans-serif'],
        paragraph: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'xl': '0 0px 25px -5px rgb(0 0 0 / 0.1), 0 0px 10px -6px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
};

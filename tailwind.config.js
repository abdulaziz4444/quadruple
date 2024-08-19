/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screen: {
        sm: "576px",
        md: "767px",
        lg: "1024px",
        xl: "1283px",
        "2xl": "1320px",
      },
    },
    fontFamily: {
      russo: ["var(--font-russo)"],
      archivo: ["var(--font-archivo)"],
      farro: ["var(--font-faro)"]
    },
    
    extend: {
      backgroundImage: {
        'hero1': "url('/images/hero1.png')",
        'herobg': "url('/images/herobg.svg')",
        'servicebg': "url('/images/servicebg.svg')",
        'articlebg': "url('/images/articlebg.svg')",
        'worldbg': "url('/images/worldbg.svg')",
        'teambg': "url('/images/teambg.svg')",
        'slidersecondbg': "url('/images/slidersecondbg.svg')",
        
      },
      colors: {
        green:"#00A87D",
        gray:"#F7F7F7",
        darkgray:"#2B2B2B",
        greenishblue:"#EBF8F5", 
        grayy: "#4E5562",
        lightgray: "#333333",
        darkgreen: "#9DFF50",
        blue: "#005FD0",
        halfblue: "#0077B5",
        purple: "#962FBF",
      }
      },
  },
  plugins: [],
};


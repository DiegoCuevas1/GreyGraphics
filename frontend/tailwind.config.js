// tailwind.config.js
module.exports = {
  corePlugins: {
      preflight: false
   },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Familjen Grotesk', 'sans-serif'], // Apply it to the default sans-serif font
      // Other font families...
    },
    extend: {
      
    },
  },
  
  plugins: [
    // your plugins here
    require("daisyui")
  ],
};
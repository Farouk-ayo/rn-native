/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Example primary color
        secondary: "#F59E0B", // Example secondary color
        accent: "#10B981", // Example accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example font family
        serif: ["Merriweather", "serif"], // Example serif font family
      },
      spacing: {
        128: "32rem", // Example custom spacing
        144: "36rem", // Example custom spacing
      },
      borderRadius: {
        "4xl": "2rem", // Example custom border radius
      },
    },
  },
  plugins: [],
};

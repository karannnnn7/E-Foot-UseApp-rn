/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetchBold: "ChakraPetch-Bold",
        ChakraPetchBoldItalic: "ChakraPetch-BoldItalic",
        ChakraPetchItalic: "ChakraPetch-Italic",
        ChakraPetchLight: "ChakraPetch-Light",
        ChakraPetchLightItalic: "ChakraPetch-LightItalic",
        ChakraPetchMedium: "ChakraPetch-Medium",
        ChakraPetchMediumItalic: "ChakraPetch-MediumItalic",
        ChakraPetchSemiBold: "ChakraPetch-SemiBold",
        ChakraPetchSemiBoldItalic: "ChakraPetch-SemiBoldItalic",
      },
    },
  },
  plugins: [],
}


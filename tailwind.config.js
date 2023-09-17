/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat": ["Montserrat"]
      },
      colors: {
        'deep-green': 'var(--deep-green)',
        'sky-blue': 'var(--sky-blue)',
        'earthy-brown': 'var(--earthy-brown)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "autumn"],
  },
}

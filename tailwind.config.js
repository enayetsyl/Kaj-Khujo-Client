/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],

  theme: {
    extend: {
      colors: {
        headingText: "#000080",
        logoText: "#333333",
        buttonBorder: '#d3d3d3',
        buttonText:'#ffffff',
        navLinkText: '#333333',
        reviewText:'#8cc084',
        footerText:'#333333',
        placeholderText:'#a9a9a9',
        
      },
      backgroundColor: {
        body: '#f5f5f5',
        footer:'#e0e0e0',
        navbar: '#e0e0e0',
        modal:'rgba(0,0,0,0.5)',
        logo:'#f5f5f5',
        button:'#0074e4',
        navLink:'#e6f7ff',

      },


    },
  },
  plugins: [require("daisyui")],
}


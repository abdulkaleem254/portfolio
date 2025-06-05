// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // adjust if needed
    ],
    darkMode: 'class', // enables class-based dark mode
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}

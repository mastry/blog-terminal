/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'terminal': ['"Ubuntu Mono", Menlo, Consolas, Monaco, Lucida Console, monospace']
            }
        },
    },
    plugins: [],
}

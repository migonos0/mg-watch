const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                grayextra: {
                    base: '#111827',
                    analogus0: '#1B1433',
                    analogus1: '#181A3D',
                    analogus2: '#182E3D',
                    analogus3: '#142E33',
                },
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};

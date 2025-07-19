module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {
            colors: {
                'win-gray': '#c0c0c0',
                'win-dark-gray': '#808080',
                'win-light-gray': '#dfdfdf',
                'win-black': '#000000',
                'win-white': '#ffffff',
                'win-blue': '#008080',
            },
        },
    },
    plugins: [],
}
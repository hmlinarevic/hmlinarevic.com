module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                dark: '#22272f',
                black: '#2e3440',
                night: '#4c566a',
                white: '#eceff4',
                orange: '#d08770',
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
        },

        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['IBM Plex Serif', 'serif'],
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        deep: '#3730A3',
        accent: '#F59E0B',
        found: '#10B981',
        danger: '#EF4444',
        mist: '#E0E7FF',
        fog: '#EEF2FF',
        ink: '#1E1B4B',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

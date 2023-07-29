/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001D3D',
        primaryHover: '#003566',
        secondary: '#FFC300',
        secondaryHover: '#FFD60A',
        textPrimary: '#F9F9F9',
        textSecondary: '#1E1E1E',
        accent: 'rgba(0,53,102, 0.75)',
        success: '#00940F',
        successHover: '#02BD15',
        danger: '#A90014',
        dangerHover: '#D00019',
      },
      fontFamily: {
        oswald: ['Oswald', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

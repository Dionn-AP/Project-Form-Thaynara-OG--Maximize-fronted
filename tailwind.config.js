/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        button_and_icons: '#FF8585',
        border_focused_inputs: '#FFDADA',
        background_menu_burger: 'rgba(255, 255, 255, 0.85)',
        background_inbox: 'rgba(255, 218, 218, 0.4)',
        button_not_robot: '#F5F5F5',
        text_color: '#333333',
        text_color_footer: '#BDBDBD',
        placeholder_color: '#666666',
        border_inputs: '#C4C4C4',
        background_modal: 'rgba(0, 0, 0, 0.4)',
        color_black_default: '#000000'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      rotation_up: {
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(180deg)'}
      },
      rotation_down: {
        '0%': {transform: 'rotate(180deg)'},
        '100%': {transform: 'rotate(0deg)'}
      }
    },
    animation: {
      'rotate-arrow-up': 'rotation_up .5s both',
      'rotate-arrow-down': 'rotation_down .5s both'
    },
    backgroundImage: {
      'hero': "url('./src/assets/ThaynaraOG.png)"
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}

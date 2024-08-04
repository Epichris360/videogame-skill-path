// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/* Tailwind Configuration Docs: https://tailwindcss.com/docs/configuration */
import type {Config} from 'tailwindcss';

export default {
  mode: 'jit',
  content: [
    './**/*.liquid',
    './src/**/*.{js,ts,jsx,tsx}',
    './assets/*.js',
    './templates/*.json',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4/3',
        '16/25': '16/25',
        '7/10': '7/10',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
      colors: {
        'breeze-blue': {
          DEFAULT: '#1198D6',
          hover: '#29B1DC',
          active: '#1275BC',
        },
        'deep-ocean-blue': {
          DEFAULT: '#113988',
          hover: '#29B1DC',
          active: '#1275BC',
        },
        'light-breeze': {
          DEFAULT: '#74D1F6',
          hover: '#29B1DC',
          active: '#1275BC',
        },
        'fresh-scent': {
          DEFAULT: '#52A53E',
          hover: '#7FCA43',
          active: '#37A03B',
        },
        'wild-blossoms': {
          DEFAULT: '#DC84B3',
          hover: '#DC84B3',
          active: '#DC84B3',
        },
        sport: {
          DEFAULT: '#F7AA36',
          hover: '#FFCA62',
          active: '#F98F2C',
        },
        sunshine: {
          DEFAULT: '#F5D816',
          hover: '#FFE037',
          active: '#D4951B',
        },
        'error-red': {
          DEFAULT: '#D8273D',
          hover: '#FF6464',
          active: '#E00D59',
        },
        salmon: '#EA9099',
        'navy-black': '#12213F',
        'blue-gray': '#3D5870',
        gray_: '#8292A5',
        'crisp-white': {
          DEFAULT: '#FFFEF9',
          hover: '#E8F4FF',
          active: '#E3E9FF',
        },
        'cloud-white': '#E6F3F5',
        'disabled-gray': '#CCD5DF',
        'tag-blue': '#0099d3',
        // Old Colors
        'primary-green': {
          DEFAULT: '#01B26A',
          hover: '#13C26E',
          active: '#039D78',
        },
        'primary-blue': {
          DEFAULT: '#4193CC',
          hover: '#29B1DC',
          active: '#1275BC',
        },
        'primary-teal': {
          DEFAULT: '#0C98B1',
          hover: '#12B5BF',
          active: '#06819C',
        },
        'logo-lime': {
          DEFAULT: '#5DB73A',
          hover: '#7FCA43',
          active: '#37A03B',
        },
        'logo-sky-blue': '#09BEE2',
        'accent-red': {
          DEFAULT: '#F72F70',
          hover: '#FF6464',
          active: '#E00D59',
        },
        'accent-yellow': {
          DEFAULT: '#F2CA39',
          hover: '#FFE037',
          active: '#D4951B',
        },
        'bright-white': {
          DEFAULT: '#FFF',
          hover: '#E8F4FF',
          active: '#E3E9FF',
        },
        'bright-cloud-white': '#F6FBFF',
        'bright-mist-white': '#F5FBFF',
        'bright-mist-gray': '#E8EFF7',
        'bright-beige-white': '#F1EEED',
        'bright-mist-blue': '#F6FBFF',
        'neutral-beige': '#CBC0BC',
        'neutral-gray': {
          DEFAULT: '#C1C8D1',
          hover: '#84B3CD',
          active: '#093265',
        },
        'neutral-dark-gray': '#565656',
        'neutral-baby-blue': '#A2C2D4',
        'dark-navy-black': '#1B2B3D',
        'dark-blue-gray': '#45576D',
        'dark-ocean': '#30709B',
        'dark-true-black': '#000000',
        'light-pink': '#FEE6EE',
        'dark-green': '#08A867',
        'dark-fucsia': '#E52D69',
      },
      screens: {
        xs: '24em',
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'xss-under-only': {min: '0em', max: '24em'},
        'xss-only': {min: '24em', max: '32em'},
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
        0.5: '0.125rem',
        0.75: '0.1875rem',
        3.5: '0.875rem',
        4.5: '1.125rem',
        '128': '32rem',
        152: '38rem',
        '5vw': '5vw',
        '7vw': '7vw',
        '64vw': '64vw',
        18: '4.5rem',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
        162: '42.75rem',
        '1/10': '10%',
        '1/5': '20%',
        '2/5': '40%',
        '1/20': '5%',
        '3/20': '15%',
        '35%': '35%',
        '70%': '70%',
        '179': '44.75rem',
        '134': '33.5rem'
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--nav-height) - var(--banner-height))',
        '45.75': '11.675rem',
        '72': '18rem',
        '136': '34rem',
        '0.25': '0.0625rem',
        '160': '40rem',
        '172': '43rem',
        '88': '22rem',
      },
      lineHeight: {
        '5.5': '1.375rem',
        'very-tight': '1.125',
        '16': '4rem',
        '36': '9rem',
        '1/2': '.5',
      },
      maxHeight: {
        unset: 'unset',
        '100vh': '100vh',
      },
      maxWidth: {
        52: '13rem',
        '84': '21rem',
        '80vw': '80vw',
        '220': '55rem',
        '160': '40rem',
        '192': '48rem',
        '204': '51rem',
        '4.5xl': '60rem',
        '6.3xl': '75rem',
        '8xl': '90rem',
        '30vw': '30vw',

      },
      dropShadow: {
        modal: '0px 4px 16px 0px rgba(17, 57, 136, 0.20)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
        '66.75': '16.6875rem',
        '82': '20.5rem',
        '60': '15rem',
        '57': '14.25rem',
        '34': '8.5rem',
        '177': '44rem',
        '136': '34rem',
        '196': '49rem',
        '36': '9rem',
        '320': '80rem',
        '30vw': '30vw',
        '35vw': '35vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '144': '36rem',
        '120': '30rem',
      },
      fontFamily: {
        venticf: ['VentiCF'],
        arial: ['Arial'],
        helvetica: ['Helvetica'],
        sans: ['BRSonoma', 'BRSonomaCF', 'Arial', 'Helvetica', 'monospace'],
        left21: ['Left21', 'ArialCF', 'Arial', 'Helvetica', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '2.5xl': '1.75rem',
        '3xs': '0.5rem',
        '4xs': '0.375rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '4.5xl': '2.8125rem',
        '6xl': '4rem',
        '10xl': '10rem',
      },
      keyframes: {
        fadeOut: {
          from: {opacity: '1'},
          to: {opacity: '0'},
        },
      },
      animation: {
        fadeOut: 'fadeOut 10s ease-in-out',
      },
      letterSpacing: {
        'even-tighter': '-0.06em',
        'very-tight': '-0.04em',
        tightest: '-0.08em',
        snug: '-0.0125em',
        close: '-3.2px',
        'even-wider': '0.068em',
      },
      backgroundImage: {
        'green-gradient':
          'linear-gradient(137deg, #0C98B1 12.65%, #01B26A 86.53%)',
        'green-gradient-hover':
          'linear-gradient(137deg, #18B9CF 12.65%, #17D362 86.53%)',
        'green-gradient-active':
          'linear-gradient(137deg, #0D7FB0 12.65%, #00B749 86.53%)',
      },
      padding: {
        '18': '4.5rem',
      },
      rotate: {
        '30': '30deg',
        '35': '35deg',
      },
      inset: {
        100: '25rem',
        '15vw': '15vw',
        '20vw': '20vw',
        '25vw': '25vw',
        '35vw': '35vw',
        '168': '42rem',
      },
      gap: {
        '19.5': '4.875rem',
        '17': '4.25rem',
      },
      backgroundPosition: {
        'center-bottom': 'center bottom',
      },
      gridTemplateColumns: {
        autofit: 'repeat(auto-fit, minmax(0, 1fr))',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
} satisfies Config;

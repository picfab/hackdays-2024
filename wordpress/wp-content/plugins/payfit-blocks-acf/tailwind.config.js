/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './blocks/**/*.{php,html,js,tsx}',
    './assets/**/*.{php,html,js,tsx}',
  ],
  prefix: '',
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        'thumbnail-overlay':
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
      },
      animation: {
        scroll: 'slide-left 10s linear infinite',
        'scroll-inverse': 'scroll-inverse 10s linear infinite',
        'scroll-normal': 'scroll-normal 10s linear infinite',
        // banner: 'banner 300ms ease-in-out 2s forwards',
        'fade-in': 'fade-in 750ms ease-in-out forwards',
        'fade-in-300': 'fade-in 300ms ease-in-out forwards',
        'fade-in-300-delay-100': 'fade-in 300ms 100ms ease-in-out forwards',
        'fade-out-200': 'fade-out 200ms ease-in-out forwards',
        'fade-out-300': 'fade-out 200ms ease-in-out forwards',
        'slide-left': 'slide-left 500ms cubic-bezier(0.42, 1.44, 0.39, 0.87)',
        'slide-right': 'slide-right 500ms cubic-bezier(0.42, 1.44, 0.39, 0.87)',
        'slide-top': 'slide-top 500ms cubic-bezier(0.42, 1.44, 0.39, 0.87)',
        'slide-bottom':
          'slide-bottom 500ms cubic-bezier(0.42, 1.44, 0.39, 0.87)',
        dashDoodle: 'dashDoodle 2s ease-in-out forwards',
        floatProduct: '6s ease-in-out 0.5s floatProduct infinite',
        'floatProduct-3': '6s ease-in-out -3s floatProduct infinite',
        'slide-in-top-30':
          'fade-in 600ms ease-in-out forwards,slide-in-top-30 600ms ease-in-out forwards',
      },
      keyframes: {
        'slide-in-top-30': {
          '0%': {
            transform: 'translateY(30px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        floatProduct: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        dashDoodle: {
          '0%': {
            strokeDashoffset: '10000',
          },
          '100%': {
            strokeDashoffset: '0',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'slide-top': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'slide-bottom': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'scroll-inverse': {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        'scroll-normal': {
          from: {
            transform: 'translateX(0%)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
      },
      objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        top: 'top',
        'center-bottom': 'center bottom',
        'center-top': 'center top',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        none: '0px',
        6: '6px',
        8: '8px',
        12: '12px',
        18: '18px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        s: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        m: '0px 10px 30px rgba(0, 0, 0, 0.15)',
        l: '0px 20px 60px rgba(0, 0, 0, 0.15)',
        xl: '0px 45px 90px rgba(0, 0, 0, 0.15)',
        navigationButton: ' 0px 10px 20px rgba(0, 0, 0, 0.1);',
        color: '0px 45px 90px rgba(15, 111, 222, 0.15)',
        btn: '0px 7px 14px -4px rgb(0 0 0 / 14%)',
        none: 'none',
      },
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        neutral: {
          1: '#FFFFFF',
          21: '#EBF0F5',
          51: '#ABBBCC',
          101: '#55687D',
          200: '#E6EAEF',
          300: '#768699',
          301: '#042040',
        },
        primary: {
          1: '#0F6FDE',
          100: '#D6E9FF',
        },
        peach: {
          100: '#FFD5CC',
        },
        blue: {
          21: '#EBF4FF',
          51: '#CEDFF1',
          101: '#0F6FDE',
          301: '#08386F',
        },
        mint: {
          21: '#E6FCF7',
          51: '#C7E2DB',
          101: '#01C195',
          301: '#024737',
        },
        purple: {
          21: '#F4EEFD',
          51: '#D1CCE3',
          101: '#8753DD',
          301: '#3C2E6C',
        },
        yellow: {
          21: '#FFF6E6',
          51: '#F4E3C6',
          101: '#F5C13F',
          301: '#55462A',
        },
        azur: {
          21: '#DFF3F7',
          51: '#BED6D9',
          101: '#53C9DA',
          301: '#035A66',
        },
        coral: {
          21: '#FFF0EB',
          51: '#E5C8BE',
          101: '#F2796E',
          301: '#593022',
        },
        lang: {
          21: '#d1dae6',
          31: '#f7f9fc',
          41: '#dfe6ed',
        },
        pink: {
          71: '#F7BBB1',
        },
        silver: {
          20: 'silver',
          80: 'silver',
          100: '#D1DAE6',
          200: '#BAC8D6',
          300: '#ABBBCC',
        },
        navy: {
          80: '#364a61',
          200: '#042040',
        },
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.5rem' }],
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        21: [
          '16px',
          {
            letterSpacing: '0.3px',
            lineHeight: '22px',
          },
        ],
        24: '24px',
        28: '28px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        101: [
          '38px',
          {
            letterSpacing: '0.3px',
            lineHeight: '46px',
          },
        ],
        71: [
          '12px',
          {
            letterSpacing: '0.5px',
            lineHeight: '18px',
          },
        ],
        11: [
          '14px',
          {
            letterSpacing: '0.3px',
            lineHeight: '20px',
          },
        ],
        31: [
          '18px',
          {
            letterSpacing: '0.3px',
            lineHeight: '24px',
          },
        ],
        41: [
          '20px',
          {
            letterSpacing: '0.3px',
            lineHeight: '26px',
          },
        ],
        61: [
          '24px',
          {
            letterSpacing: '0.3px',
            lineHeight: '30px',
          },
        ],
        91: [
          '32px',
          {
            letterSpacing: '0.3px',
            lineHeight: '40px',
          },
        ],
        sm: '0.875rem',
        xl: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '2.25rem',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: '2.5rem',
          },
        ],
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        noe: [
          'NoeDisplay',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },
      minWidth: {
        64: '64px',
        500: '500px',
      },
      maxWidth: {
        '1/2': '50%',
        full: '100%',
        580: '580px',
        610: '610px',
        719: '719px',
        736: '736px',
        820: '820px',
        1000: '1000px',
        1248: '1248px',
        none: 'none',
      },
      maxHeight: {
        1000: '1000px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '9/16': '9 / 16',
      },
      lineHeight: {
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '36px',
        38: '38px',
        44: '44px',
        48: '48px',
        52: '52px',
        60: '60px',
        68: '68px',
      },
      spacing: {
        '1em': '1em',
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        36: '36px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        72: '72px',
        80: '80px',
        88: '88px',
        96: '96px',
        104: '104px',
        120: '120px',
        136: '136px',
        184: '184px',
        208: '208px',
        300: '300px',
        full: '100%',
      },
      gridTemplateColumns: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.42,1.44,0.39,0.87)',
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover', 'first', 'last'],
      borderWidth: ['hover', 'first', 'last'],
      lineClamp: ['group-hover', 'hover'],
      boxShadow: ['hover'],
      rotate: ['group-hover', 'hover'],
    },
  },
  plugins: [
    require('tailwindcss-scoped-groups')({
      groups: ['one', 'two'],
    }),
  ],
};

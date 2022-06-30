import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const customTheme = extendTheme(
  {
    colors: {
      pallete: {
        lightBlue: '#8BD3DD',
        lightYellow: '#FEF6E4',
        deepPurple: '#001858',
        lightPink: '#f582AE',
        eggYellow: '#F3D2C1',
        mildDark: '#1a1e22',
        goldDark: '#FFFFFF',
      },
    },
    fonts: {
      heading: 'Overpass, sans-serif',
      body: 'Dosis, sans-serif',
    },

    textStyles: {
      h1: {
        fontSize: ['56px', '60px', '98px'],
        letterSpacing: '0.04em',
        fontFamily: 'Overpass',
        lineHeight: '100%',
        fontWeight: 'extrabold',
      },
      h2: {
        letterSpacing: '0.04em',
        fontSize: ['30px', '56px'],
        fontFamily: 'Overpass',
        fontWeight: 'extrabold',
      },
      p: {
        letterSpacing: '0.04em',
        fontSize: ['20px', '22px'],
        fontFamily: 'Dosis',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
        },
      },
      sm: {
        letterSpacing: '0.04em',
        fontSize: '18px',
        fontFamily: 'Dosis',
      },
    },
    components: {
      Card: {
        baseStyle: {
          display: 'flex',
          flexDirection: 'column',
          w: { base: '100%', xl: '300px', '2xl': '330px' },
          alignItems: 'center',
          border: '1px solid transparent',
          transition: 'all 0.3s ease-in-out',
          gap: 6,
          _hover: {
            textDecoration: 'none',
            borderColor: 'pallete.lightPink',
            boxShadow: '2xl',
          },
        },
        variants: {
          rounded: {
            padding: 3,
            borderRadius: 'xl',
            boxShadow: 'xl',
          },
          smooth: {
            padding: 3,
            borderRadius: 'base',
            boxShadow: 'md',
          },
        },
        defaultProps: {
          variant: 'smooth',
        },
      },
    },
    styles: {
      global: (props) => ({
        'html, body': {
          fontSize: 'sm',
          color:
            props.colorMode === 'light'
              ? 'pallete.deepPurple'
              : 'pallete.goldDark',
          bg:
            props.colorMode === 'light'
              ? 'pallete.lightYellow'
              : 'pallete.mildDark',
          lineHeight: 'tall',
        },
        '.activeLink': {
          outline: 'none',
          borderBottom: '4px solid #f582AE',
          fontWeight: 'extrabold',
          transition: 'all 0.3s ease-in-out',
          fontSize: '18px',
          _hover: {
            color: 'pallete.lightPink',
          },
        },
        a: {
          fontSize: '16px',
          textDecoration: 'none',
          transition: 'all 0.3s ease-in-out',
        },
        '.project-works': {
          bg: props.colorMode === 'light' ? 'pallete.lightPink' : 'red.800',
          m: '0.5rem',
          p: '0.5rem 0.5rem',
          borderRadius: 'md',
          transition: 'all 0.3s ease-in-out',
          _hover: {
            bg: props.colorMode === 'light' ? 'pallete.lightPink' : 'blue.800',
          },
        },
        '.project-works-active': {
          bg: props.colorMode === 'light' ? 'pallete.eggYellow' : 'blue.800',
        },
      }),
    },
  },
  { config },
  { breakpoints }
)
export default customTheme

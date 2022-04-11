import {createTheme, alpha} from '@mui/material/styles';

const defaultTheme = createTheme ({});

export const theme = customizeComponents ({
  palette: {
    primary: {
      main: '#3973CA',
    },
    secondary: {
      main: '##1890FF',
    },
    success: {
      main: '###54D62C',
    },
    error: {
      main: '####FF4842',
    },
    warning: {
      main: '#FFC107',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
  typography: {
    fontFamily: ['Work Sans', 'sans-serif'].join (),
    fontSize: 12,
    h1: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: '80px',
    },
    h2: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: '50px',
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: '40px',
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '32px',
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: '26px',
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '26px',
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '24px',
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '22px',
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '22.4px',
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '22px',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '18px',
    },
    overline: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '18px',
    },
    button: {
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiLoadingButton: {
      defaultProps: {
        variant: 'contained',
      },
      variants: [
        {
          props: {variant: 'contained', color: 'primary', opaque: true},
          style: {backgroundColor: '#3973CA'},
        },
        {
          props: {variant: 'outlined', color: 'primary', opaque: true},
          style: {
            backgroundColor: '#3973CA',
            ':hover': {
              backgroundColor: '#3973CA',
            },
          },
        },
        {
          props: {variant: 'text', color: 'primary', opaque: true},
          style: {
            backgroundColor: '#3973CA',
            paddingLeft: 15,
            paddingRight: 15,
            ':hover': {
              backgroundColor: '#3973CA',
            },
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        style: {borderRadius: '8px', textTransform: 'capitalize'},
      },
      variants: [
        {
          props: {variant: 'outlined', color: 'primary', opaque: true},
          style: {backgroundColor: '#3973CA'},
        },
        {
          props: {variant: 'outlined', color: 'primary', opaque: true},
          style: {backgroundColor: '#3973CA'},
        },
        {
          props: {variant: 'text', color: 'primary', opaque: true},
          style: {
            backgroundColor: '#3973CA',
            paddingLeft: 15,
            paddingRight: 15,
            ':hover': {
              backgroundColor: '#3973CA',
            },
          },
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: {variant: 'outlined-opaque', color: 'primary'},
          style: {
            backgroundColor: '#3973CA',
          },
        },
        {
          props: {variant: 'outlined-opaque', color: 'success'},
          style: {
            backgroundColor: alpha (defaultTheme.palette.success.main, 0.1),
            color: defaultTheme.palette.success.main,
          },
        },
        {
          props: {variant: 'outlined-opaque', color: 'error'},
          style: {
            backgroundColor: alpha (defaultTheme.palette.error.main, 0.1),
            color: defaultTheme.palette.error.main,
          },
        },
        {
          props: {variant: 'outlined-opaque', color: 'warning'},
          style: {
            backgroundColor: alpha (defaultTheme.palette.warning.main, 0.1),
            color: defaultTheme.palette.warning.main,
          },
        },
        {
          props: {variant: 'outlined-opaque', color: 'info'},
          style: {
            backgroundColor: alpha (defaultTheme.palette.info.main, 0.1),
            color: defaultTheme.palette.info.main,
          },
        },
      ],
    },
  },
});

export default theme;

/**
 *
 * @param {import("@mui/material").Theme} theme
 */
function customizeComponents (theme) {
  return createTheme ({
    ...theme,
  });
}

[
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
  'common',
  'text',
  'background',
  'action',
].forEach (palatteKey => {
  Object.keys (theme.palette[palatteKey]).forEach (palatteKeyColor => {
    document.documentElement.style.setProperty (
      `--color-${palatteKey}-${palatteKeyColor}`,
      theme.palette[palatteKey][palatteKeyColor]
    );
  });
});

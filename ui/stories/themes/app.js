import { createTheme } from "@material-ui/core"
import { blueGrey } from "@material-ui/core/colors"

const createCustomTheme = (paletteType) => {
  const commonPalette = {
    primary : blueGrey,
    secondary : {
      main : '#00D3A9',
      // Add other common secondary colors here
    },
    // Add other common palette properties here
  };

  const palette =
        paletteType === 'dark'
          ? {
            type : 'dark',
            ...commonPalette,
            secondary : {
              ...commonPalette.secondary,
              // Add dark-specific secondary colors here
            },
            // Add other dark-specific palette properties here
          }
          : {
            type : 'light',
            ...commonPalette,
            secondary : {
              ...commonPalette.secondary,
              // Add light-specific secondary colors here
            },
            // Add other light-specific palette properties here
          };

  const theme = createTheme({
    typography : {
      // Add common typography settings here
    },
    palette,
    shape : { borderRadius : 8 },
    breakpoints : {
      values : {
        xs : 0,
        sm : 600,
        md : 960,
        lg : 1280,
        xl : 1920,
      },
    },
    // Add other common theme properties here
  });

  const overrides = {
    // Add common overrides here
  };

  theme.overrides = {
    ...overrides,
    // Add palette-specific overrides here, e.g.
    MuiCssBaseline : {
      '@global' : {
        body : {
          backgroundColor :
                        paletteType === 'dark' ? '#303030' : '#eaeff1',
          // Add other palette-specific body styles here
        },
      },
    },
    // Add other palette-specific overrides here
  };

  return theme;
};

const darkTheme = createCustomTheme('dark');
const lightTheme = createCustomTheme('light');

export default { darkTheme, lightTheme }
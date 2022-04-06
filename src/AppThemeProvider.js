import {ThemeProvider} from '@mui/material';
import theme from 'common/ThemeConfig';

/**
 *
 * @param {import('@mui/material').ThemeProviderProps} props
 */
export function AppThemeProvider (props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;

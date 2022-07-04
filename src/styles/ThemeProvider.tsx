import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyles from './GloabalStyles';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;

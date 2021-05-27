// This is optional, but can be used to create themes
// This approach let's you create complex themes or just variables to use throughout your app
import { ThemeProvider } from 'styled-components';

const theme = {
   colors: {
      powderWhite: '#FFFDF9',
      persianGreen: '#06B49A',
      lightBlue: '#AFDBD2',
      onyx: '#36313D'
   },
   fonts: ['Comic Sans', 'sans-serif'],
   fontSizes: {
      small: '1em',
      medium: '2em',
      large: '3em'
   }
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;

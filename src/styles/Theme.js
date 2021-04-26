import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      button: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
  });

export default theme;

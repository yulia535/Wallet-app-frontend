// import {createMuiTheme} from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    breakpoints:{
        values:{
            sm: 320,
            md:768,
            lg:1280,
        }
    },
    palette: {
      primary: {
        light: '#FFFFFF',
        main: '#24ccA7',
        dark: '#4A56E2',
      },
      secondary: {
        main:'#4A56E2',
       
      },
      error:{
        main: '#FF6596',
      },
      text:{

      }
    },
    shape:{
        borderRadius: 20,
    }

  });

  export default theme
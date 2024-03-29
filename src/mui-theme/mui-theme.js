import React from 'react'
import { useState } from 'react';
import { green, orange, blue, pink, red } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CurrentThemeContext from '../context/current-theme-context'
import CssBaseline from '@material-ui/core/CssBaseline';


const themes = {
  dark: createMuiTheme({
    palette: {
      type: 'dark',
      primary: orange,
      secondary: green,
    },
    status: {
      danger: red,
    },
  }),
  light: createMuiTheme({
     palette: {
       type: 'light',
       primary: blue,
       secondary: pink,
     },
     status: {
       success: green,
       danger: red,
     },
   })
};




function withMuiTheme(Component) {
  function withMuiTheme(props) {

    const [ currentTheme, changeTheme ] = useState('light');

    return (
        <CurrentThemeContext.Provider value={{currentTheme, changeTheme}}>
          <MuiThemeProvider theme={themes[currentTheme]}>
            <CssBaseline/>
            <Component {...props} />
          </MuiThemeProvider>
        </CurrentThemeContext.Provider>
    );
  }

  return withMuiTheme;
}

export default withMuiTheme;
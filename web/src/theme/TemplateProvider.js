import React, { createContext } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export const ThemeContext = createContext(null);

const TemplateProvider = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          height: '97%',
          top: 8,
          left: 57,
          width: '29.7%',
          overflow: 'hidden',
          boxShadow: 'unset'
        },
      },
      MuiBackdrop: {
        root:{
          backgroundColor: 'unset'
        }
      }
    },
  });

  return (
    <ThemeContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default TemplateProvider;

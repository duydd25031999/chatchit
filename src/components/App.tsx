import * as React from "react";
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { store } from "../app/store";
import { router } from "../app/router";
import { theme } from "../app/muiTheme"; 


const App = () => <React.StrictMode>
  <Provider store={store}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
</React.StrictMode>

export default App;

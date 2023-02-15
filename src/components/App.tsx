import * as React from "react";
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";

import { store } from "../app/store";
import { router } from "../app/router";
import DefaultLayout from "../components/layouts/DefaultLayout"

import '../assets/scss/global.scss';


const App = () => <React.StrictMode>
  <Provider store={store}>
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  </Provider>
</React.StrictMode>

export default App;

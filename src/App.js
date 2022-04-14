import './App.css';
import {useRoutes} from 'react-router-dom';
import {RouteEnum} from 'common/constants';
import {Suspense} from 'react';
import Home from 'home/Home';
import AppThemeProvider from 'AppThemeProvider';
import Products from 'products/Products';
import 'assets/slick/slick.css';
import 'assets/slick/slick-theme.css';
import About from 'about/About';

function App () {
  const ROUTES = useRoutes ([
    {
      path: RouteEnum.PRODUCTS_DETAIL,
      element: <Products />,
    },
    {
      path: RouteEnum.ABOUT,
      element: <About />,
    },
    {
      path: RouteEnum.HOME,
      element: <Home />,
    },
    {
      path: '*',
      element: <Home />,
    },
  ]);

  return (
    <AppThemeProvider>
      <Suspense fallback={'loading...'}>{ROUTES}</Suspense>
    </AppThemeProvider>
  );
}

export default App;

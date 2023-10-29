import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import { routes } from './utils/routes';
import store from './store';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.catalog} element={<Catalog />} />
          <Route path={routes.product} element={<Product />} />
          <Route path={routes.cart} element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

// import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Top from './components/Top/Top';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer';
import HotelProvider from './context/HotelContext';
import SearchPage from './components/Search/SearchPage';
import Confirm from './components/Checkout/Confirm';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <HotelProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Top />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path='/Detail'>
            <Detail />
          </Route>
          <Route path='/Confirm'>
            <Confirm />
          </Route>
          <Route path='/Checkout'>
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </HotelProvider>
  );
}

export default App;
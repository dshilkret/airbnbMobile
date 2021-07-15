import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Footer />
          </Route>
          <Route path="/search">
            <SearchPage />
            <Footer />
          </Route>
          <Route path='/Detail'>
            <Detail />
            <div className="mb-5">
              <Footer />
            </div>
          </Route>
          <Route path='/Confirm'>
            <Confirm />
            <Footer />
          </Route>
          <Route path='/Checkout'>
            <Checkout />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </HotelProvider>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import { createContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AllServices from './components/AllServices/AllServices';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import CompleteOrder from './components/CompleteOrder/CompleteOrder';

export const cartContext = createContext();

function App() {

  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={[cart, setCart]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <AllServices></AllServices>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/review">
            <ReviewOrder></ReviewOrder>
          </Route>
          <Route path="/completeOrder">
            <CompleteOrder></CompleteOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;

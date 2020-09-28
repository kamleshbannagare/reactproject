import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const App = () => {
  return(
    <>
    <Navbar />
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/services" component={Services} />
       <Route exact path="/contact" component={Contact} />
       <Redirect to="/" />
      <Home />
     </Switch>
    </>
  );
};

export default App;
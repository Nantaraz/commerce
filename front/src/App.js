import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
//import './App.css';
import Accueil from './component/Accueil';
//import Menu from './component/Menu';
import AddProduct from './component/AddProduct';
import Login from './component/login';
import Register from './component/register';


class App extends Component {
    
  render()  {
  return (
    <Router>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* <a className="navbar-brand" href="nm"></a>  */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                    <Link to="/Accueil"><a className="nav-link" href="mmm">Accueil<span className="sr-only">(current)</span> </a> </Link></li>
          
            {/* <li className="nav-item">
                   
                    <Link to="/AddProduct"><a className="nav-link" href="mm">Produits</a></Link></li> */}

            <li className="nav-item">
                   
                   <Link to="/Login"><a className="nav-link" href="m">AjouterProduits</a></Link></li>
            {/* <li className="nav-item">
                   
                   <Link to="/Register"><a className="nav-link" href="m">Register</a></Link></li> */}
             
            </ul>
       </div>
       
</nav>
        <Route path="/" exact component={Accueil} />
        <Route path="/Accueil" component={Accueil} />
        <Route path="/AddProduct" component={AddProduct} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        
     
    </Router>
  );

}
}
export default App;
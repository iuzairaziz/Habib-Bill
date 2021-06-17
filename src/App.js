import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Invoice from './Components/Invoice';
import GSTinvoice from './Components/GSTinvoice';
import Testing from './Components/Testing';
import GSTtable from './Components/GSTtable';


function App() {
  return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Invoice </Link></li>
            <li><Link to={'/gst'} className="nav-link">GST Invoice</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Invoice} />
              <Route path='/gst' component={GSTinvoice} />
              <Route path='/testing' component={Testing} />
              <Route path="/gstbill" component={GSTtable} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;

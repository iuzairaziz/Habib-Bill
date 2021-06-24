import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Invoice from "./Components/Invoice";
import GSTinvoice from "./Components/GSTinvoice";
import Testing from "./Components/Testing";
import GSTtable from "./Components/GSTtable";
import Bill from "./Components/Bill";
import Challan from "./Components/Testing";
import GSTBill from "./Components/GSTBill";
import CountryForm from "./Components/AddCustomer";
import NatureForm from "./Components/AddProducts";

function App() {
  return (
    <Router>
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                Invoice{" "}
              </Link>
            </li>
            <li>
              <Link to={"/gst"} className="nav-link">
                GST Invoice
              </Link>
            </li>
          </ul>
        </nav> */}
        <hr />
        <Switch>
          <Route exact path="/" component={Invoice} />
          <Route path="/gst" component={GSTinvoice} />
          <Route path="/testing" component={Testing} />
          <Route path="/gstbill" component={GSTtable} />
          <Route path="/bill" component={Bill} />
          <Route path="/gst-bill" component={GSTBill} />
          <Route path="/add-customer" component={CountryForm} />
          <Route path="/add-product" component={NatureForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

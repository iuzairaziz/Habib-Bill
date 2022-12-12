import React, { useState, useEffect } from "react";
import {
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  Button,
  Col,
  Row,
} from "reactstrap";
import GSTtable from "./GSTtable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CountryService from "../Services/CustomerService";
import NatureService from "../Services/NatureService";
import Select from "react-select";

const GSTinvoice = (props) => {
  const [options, setOptions] = useState([]);
  const [name, setName] = useState();
  const [items, setItems] = useState();
  const [unit, setUnit] = useState(0);
  const [product, setProduct] = useState();
  const [customer, setCustomer] = useState();
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState();
  const [remarks, setRemarks] = useState();
  const [saletax, setSaleTax] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [country, setCountry] = useState([]);
  const [nature, setNature] = useState([]);
  const [remainingBalance, setRemainingBalance] = useState();
  const [remainingBalanceAmount, setRemainingBalanceAmount] = useState();

  useEffect(() => {
    getCountry();
    getNature();
  }, []);

  const getCountry = () => {
    CountryService.getAllCountry().then((res) => {
      let options = [];
      res.data.map((item, index) => {
        options.push({
          // value: item._id,
          label: item.name,
          value: item._id,
        });
        setCountry(options);
        console.log("Customers", country);
      });
    });
  };

  const getNature = () => {
    NatureService.getAllNature().then((res) => {
      let options = [];
      res.data.map((item, index) => {
        options.push({ label: item.name, value: item._id });
      });
      setNature(options);
      console.log("Prodcuts", nature);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/">
            <Button>Invoice</Button>
          </Link>
//           <Link to="/add-customer">
//             <Button>Add Customer</Button>
//           </Link>
//           <Link to="/add-product">
//             <Button>Add Products</Button>
//           </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>GST Invoice</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form>
            <div className="row">
            <Col>
                <Label for="exampleSelect" sm={2}>
                  Customer
                </Label>
                <Col sm={11}>
                  <select
                    value={customer}
                    onChange={(e) => {
                      setCustomer(e.target.value);
                    }}
                  >
                   <option>AA</option>
<option>ABDUL WAHAB</option>
<option>ADAM PAPER & BOARD</option>
<option>AHMAD STRAW</option>
<option>AK</option>
<option>AL - AZIZ</option>
<option>AL - REHMAN</option>
<option>AL MEEZAN</option>
<option>AL-AZIZ PAPER & BOARD MILLS</option>
<option>AL-KARAM</option>
<option>ATAS</option>
<option>BABBAR GATTA FACTORY </option>
<option>BHATTI </option>
<option>CENTURY</option>
<option>CH. SHABAAN</option>
<option>CHAMAN TEXTILE</option>
<option>CHENAB BOARD</option>
<option>FAISLABAD PAPER & BOARD MILLS</option>
<option>FAISLABAD</option>
<option>FATIMA </option>
<option>FAZAL BOARD</option>
<option>FINE PAPER & BOARD MILLS</option>
<option>FINE</option>
<option>FLYING</option>
<option>GOHAR PAPER & BOARD MILLS</option>
<option>GOHAR</option>
<option>GOLD</option>
<option>HAIDER ALI</option>
<option>HASHMI</option>
<option>HH</option>
<option>HIRA</option>
<option>HUSNAIN</option>
<option>ILYAS QADRI</option>
<option>INDUS COATING </option>
<option>IRSHAD NAEEM</option>
<option>JAGHNGIR </option>
<option>JAHANGIR PAPER & BOARD MILLS</option>
<option>KERTAS PAPER & BOARD MILLS</option>
<option>KHIALI</option>
<option>KING</option>
<option>LATEEF PAPER & BOARD</option>
<option>MALIK PACKAGES</option>
<option>MANDI </option>
<option>MANDI BHAODIN PAPER & BOARD MILLS</option>
<option>MISK</option>
<option>MM PAPER & BOARD MILLS</option>
<option>MM</option>
<option>MODEL PAPER & BOARD MILLS</option>
<option>MODEL</option>
<option>NASEER PAPER & BOARD MILLS</option>
<option>NASEER</option>
<option>NEELAM PAPER & BOARD</option>
<option>NOSHNI</option>
<option>PAK PUNJAB PAPER & BOARD MILLS</option>
<option>PAK</option>
<option>PAPYRUS </option>
<option>PAPYRUS PAPER & BOARD MILLS</option>
<option>PIONEER PAPER & BOARD MILLS</option>
<option>PIONEER</option>
<option>PREMIER</option>
<option>PRIME</option>
<option>PUNJAB PAPER & BOARD MILLS</option>
<option>QASWA PAPER & BOARD MILLS</option>
<option>QASWA</option>
<option>QAUMI</option>
<option>RASHID GUJJAR</option>
<option>REHMAN PLASTIC</option>
<option>RIZWAN SB.</option>
<option>SAADIQ PAPER</option>
<option>SALEEM SB.</option>
<option>SHEIKH BILAL</option>
<option>SK</option>
<option>STAR PAPER & BOARD MILLS</option>
<option>SUBHAN BOARD</option>
<option>SUPREME PAPER & BOARD MILLS</option>
<option>SUPREME</option>
<option>TAJ </option>
<option>UMAR </option>
<option>ZAFAR IQBAL </option>
<option>ZAMAN PACKAGES</option>
                  </select>
                </Col>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Customer</Label>
                  <Input
                    value={customer}
                    onChange={(e) => {
                      setCustomer(e.target.value);
                    }}
                    type="text"
                    name="password"
                    id="examplePassword"
                    placeholder="Customer Name"
                  />
                </FormGroup>
              </Col>
              <FormGroup row className="datepicker">
                <Label for="exampleSelect" sm={2}>
                  Select Date
                </Label>
                <Col sm={10}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    isClearable
                    placeholderText="I have been cleared!"
                  />
                </Col>
              </FormGroup>
            </div>
            <Row>
              {" "}
              <Col md={12}>
                <FormGroup>
                  <Label for="examplePassword">Remarks</Label>
                  <Input
                    value={remarks}
                    onChange={(e) => {
                      setRemarks(e.target.value);
                    }}
                    type="text"
                    name="password"
                    id="examplePassword"
                    placeholder="Remarks "
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup row className="options">
            <Col>
                <Label for="exampleSelect" sm={2}>
                  Item
                </Label>
                <Col sm={11}>
                  <select
                    value={product}
                    onChange={(e) => {
                      setProduct(e.target.value);
                    }}
                  >
                 <option>Acid Orange </option>
<option>Aurmine o</option>
<option>BLUE</option>
<option>Black Liquid </option>
<option>Bleaching </option>
<option>CAUSTIC SODA </option>
<option>DELIVERY CHARGES</option>
<option>Direct Black </option>
<option>Direct Orange </option>
<option>Direct Red 12B </option>
<option>Direct Red </option>
<option>Direct Scarlet 4BS</option>
<option>FORMIC ACID</option>
<option>GOLDEN XGRL </option>
<option>GREEN </option>
<option>GaurGum</option>
<option>Green Liquid</option>
<option>Gum Rosin </option>
<option>LEECO </option>
<option>Malachite Green (Crystal)</option>
<option>Methyl Violet (Crystal) </option>
<option>Methylene Blue</option>
<option>Nigrosine Black</option>
<option>ORANGE</option>
<option>Orange RSN </option>
<option>PAK Punjab</option>
<option>Red 3R</option>
<option>Red XGRL </option>
<option>Rhodamine B Extra</option>
<option>Sky Blue SB</option>
<option>Turqouise Blue </option>
<option>VIOLET </option>
<option>Violet Liquid</option>
<option>YELLOW CRUDE</option>
<option>YELLOW XTR</option>
<option>Yellow </option>
<option>Yellow LMQ</option>
<option>Yellow Liquid</option>
<option>bismark Brown</option>
                  </select>
                </Col>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Item</Label>
                  <Input
                    value={product}
                    onChange={(e) => {
                      setProduct(e.target.value);
                    }}
                    type="text"
                    name="password12"
                    id="examplePassword"
                    placeholder="Item"
                  />
                </FormGroup>
              </Col>
              <Col>
                <Label for="exampleSelect" sm={2}>
                  Unit
                </Label>
                <Col sm={11}>
                  <select
                    value={unit}
                    onChange={(e) => {
                      setUnit(e.target.value);
                    }}
                  >
                    <option>none</option>
                    <option>KG</option>
                    <option>BAG </option>
                    <option>DRUM </option>
                    <option>CARRTON</option>
                  </select>
                </Col>
              </Col>
              <Row className="customer">
              <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Quantity</Label>
                    <Input
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      type="number"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter Quantity"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Rate</Label>
                    <Input
                      value={rate}
                      onChange={(e) => {
                        setRate(e.target.value);
                      }}
                      type="number"
                      name="password"
                      id="examplePassword"
                      placeholder="Rate "
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="customer">
                {" "}
                {/* <Col md={6}>
                  <FormGroup>>
                </Col> */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Amount</Label>
                    <Input
                      value={remainingBalanceAmount}
                      onChange={(e) => {
                        setRemainingBalanceAmount(e.target.value);
                      }}
                      type="text"
                      name="password"
                      id="examplePassword"
                      placeholder="Remaing Balance Amount "
                    />
                  </FormGroup>
                </Col>
              </Row>
            </FormGroup>
            <div className="button">
              <Button
                outline
                color="primary"
                onClick={() => {
                  setOptions((prevVal) => [
                    ...prevVal,
                    { quantity, rate, unit, items, product },
                  ]);
                }}
              >
                Enter
              </Button>{" "}
              <Link
                to={{
                  pathname: "/gst-bill",
                  BillProps: {
                    data: options,
                    remarks: remarks,
                    name: name,
                    startDate: startDate,
                    remainingBalance: remainingBalance,
                    customer: customer,
                    // totalBalance: totalBalance,
                    remainingBalanceAmount: remainingBalanceAmount,
                    // totalBalanceAmount: totalBalanceAmount,
                  },
                }}
              >
                <Button outline color="primary">
                  Print
                </Button>{" "}
              </Link>
            </div>
          </Form>
        </div>
      </div>
      <GSTtable
        data={options}
        remarks={remarks}
        name={name}
        startDate={startDate}
        remainingBalance={remainingBalance}
        customer={customer}
        // totalBalance={totalBalance}
        remainingBalanceAmount={remainingBalanceAmount}
        // totalBalanceAmount={totalBalanceAmount}
        // saletax={saletax}
      />
      {/* <DataTableExtensions>
        <GSTtable
          data={options}
          remarks={remarks}
          name={name}
          startDate={startDate}
          // saletax={saletax}
        />
      </DataTableExtensions> */}
    </div>
  );
};

export default GSTinvoice;

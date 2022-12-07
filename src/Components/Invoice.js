import React, { useState, useRef, useEffect } from "react";
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
import Challan from "../Components/Testing";
import "./Invoice.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CountryService from "../Services/CustomerService";
import NatureService from "../Services/NatureService";
import Select from "react-select";

const Invoice = (props) => {
  const [options, setOptions] = useState([]);
  const [name, setName] = useState();
  const [items, setItems] = useState();
  const [unit, setUnit] = useState(0);
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState();
  const [remarks, setRemarks] = useState();
  const [product, setProduct] = useState();
  const [customer, setCustomer] = useState();
  // const [totalBalance, setTotalBalance] = useState();
  const [remainingBalance, setRemainingBalance] = useState();
  // const [totalBalanceAmount, setTotalBalanceAmount] = useState();
  const [remainingBalanceAmount, setRemainingBalanceAmount] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [country, setCountry] = useState([]);
  const [nature, setNature] = useState([]);

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
          <Link to="/gst">
            <Button>GST Invoice</Button>
          </Link>
          <Link to="/add-customer">
            <Button>Add Customer</Button>
          </Link>
          <Link to="/add-product">
            <Button>Add Products</Button>
          </Link>
        </div>
      </div>
      <div className="row heading">
        <div className="col">
          <h1> Invoice </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form>
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
                    <option>PIONEER</option>
                    <option>FINE</option>
                    <option>ZAFAR IQBAL </option>
                    <option>TAJ </option>
                    <option>NASEER</option>
                    <option>MODEL</option>
                    <option>QASWA</option>
                    <option>BHATTI </option>
                    <option>JAGHNGIR </option>
                    <option>AHMAD STRAW</option>
                    <option>HIRA</option>
                    <option>HASHMI</option>
                    <option>PAPYRUS </option>
                    <option>UMAR </option>
                    <option>AA</option>
                    <option>PRIME</option>
                    <option>SUPREME</option>
                    <option>FATIMA </option>
                    <option>INDUS COATING </option>
                    <option>AK</option>
                    <option>AL - REHMAN</option>
                    <option>MM</option>
                    <option>SK</option>
                    <option>FLYING</option>
                    <option>GOHAR</option>
                    <option>FAISLABAD</option>
                    <option>PREMIER</option>
                    <option>HH</option>
                    <option>CENTURY</option>
                    <option>QAUMI</option>
                    <option>KING</option>
                    <option>NOSHNI</option>
                    <option>GOLD</option>
                    <option>AL - AZIZ</option>
                    <option>MALIK PACKAGES</option>
                    <option>HUSNAIN</option>
                    <option>ATAS</option>
                    <option>IRSHAD NAEEM</option>
                    <option>AL MEEZAN</option>
                    <option>ILYAS QADRI</option>
                    <option>AL-KARAM</option>
                    <option>SHEIKH BILAL</option>
                    <option>KHIALI</option>
                    <option>ABDUL WAHAB</option>
                    <option>MISK</option>
                    <option>CH. SHABAAN</option>
                    <option>CHENAB BOARD</option>
                    <option>SALEEM SB.</option>
                    <option>FAZAL BOARD</option>
                    <option>RASHID GUJJAR</option>
                    <option>ADAM PAPER & BOARD</option>
                    <option>NEELAM PAPER & BOARD</option>
                    <option>RIZWAN SB.</option>
                    <option>CHAMAN TEXTILE</option>
                    <option>ZAMAN PACKAGES</option>
                    <option>REHMAN PLASTIC</option>
                    <option>SUBHAN BOARD</option>
                    <option>HAIDER ALI</option>
                    <option>SAADIQ PAPER</option>
                    <option>LATEEF PAPER & BOARD</option>
                    <option>KERTAS PAPER & BOARD MILLS</option>
                    <option>PAK PUNJAB PAPER & BOARD MILLS</option>
                    <option>PAK</option>
                    <option>JAHANGIR PAPER & BOARD MILLS</option>
                    <option>SUPREME PAPER & BOARD MILLS</option>
                    <option>NASEER PAPER & BOARD MILLS</option>
                    <option>STAR PAPER & BOARD MILLS</option>
                    <option>PUNJAB PAPER & BOARD MILLS</option>
                    <option>QASWA PAPER & BOARD MILLS</option>
                    <option>PAPYRUS PAPER & BOARD MILLS</option>
                    <option>MODEL PAPER & BOARD MILLS</option>
                    <option>MM PAPER & BOARD MILLS</option>
                    <option>PIONEER PAPER & BOARD MILLS</option>
                    <option>MANDI BHAODIN PAPER & BOARD MILLS</option>
                    <option>MANDI </option>
                    <option>FINE PAPER & BOARD MILLS</option>
                    <option>GOHAR PAPER & BOARD MILLS</option>
                    <option>BABBAR GATTA FACTORY </option>
                    <option>FAISLABAD PAPER & BOARD MILLS</option>
                    <option>AL-AZIZ PAPER & BOARD MILLS</option>
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
                       <option>Aurmine o</option>
                    <option>Yellow LMQ</option>
                    <option>Direct Red </option>
                    <option>Direct Black </option>
                    <option>bismark Brown</option>
                    <option>Sky Blue SB</option>
                    <option>Violet Liquid</option>
                    <option>Methyl Violet (Crystal) </option>
                    <option>Acid Orange </option>
                    <option>Direct Scarlet 4BS</option>
                    <option>Rhodamine B Extra</option>
                    <option>Yellow Liquid</option>
                    <option>Gum Rosin </option>
                    <option>Orange RSN </option>
                    <option>Green Liquid</option>
                    <option>PAK Punjab</option>
                    <option>ORANGE</option>
                    <option>Black Liquid </option>
                    <option>Bleaching </option>
                    <option>GaurGum</option>
                    <option>Direct Red 12B </option>
                    <option>Malachite Green (Crystal)</option>
                    <option>Red XGRL </option>
                    <option>Red 3R</option>
                    <option>GREEN </option>
                    <option>Methylene Blue</option>
                    <option>LEECO </option>
                    <option>YELLOW CRUDE</option>
                    <option>CAUSTIC SODA </option>
                    <option>Nigrosine Black</option>
                    <option>Turqouise Blue </option>
                    <option>DELIVERY CHARGES</option>
                    <option>Direct Orange </option>
                    <option>FORMIC ACID</option>
                    <option>Yellow </option>
                    <option>BLUE</option>
                    <option>VIOLET </option>
                    <option>YELLOW XTR</option>
                    <option>GOLDEN XGRL </option>
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
              <Row className="enteries">
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
              {/* <Row className="customer">
                {" "}
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Current Balance</Label>
                    <Input
                      value={totalBalance}
                      onChange={(e) => {
                        setTotalBalance(e.target.value);
                      }}
                      type="text"
                      name="password"
                      id="examplePassword"
                      placeholder="Total Balance "
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Amount</Label>
                    <Input
                      value={totalBalanceAmount}
                      onChange={(e) => {
                        setTotalBalanceAmount(e.target.value);
                      }}
                      type="text"
                      name="password"
                      id="examplePassword"
                      placeholder="Total Balance Amount"
                    />
                  </FormGroup>
                </Col>
              </Row> */}
              <Row className="customer">
                {" "}
                {/* <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Remaining Balance</Label>
                    <Input
                      value={remainingBalance}
                      onChange={(e) => {
                        setRemainingBalance(e.target.value);
                      }}
                      type="text"
                      name="password"
                      id="examplePassword"
                      placeholder="Remaing Balance "
                    />
                  </FormGroup>
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
                    { quantity, rate, unit, items, remainingBalanceAmount, product },
                  ]);
                }}
              >
                Enter
              </Button>{" "}
              <Link
                to={{
                  pathname: "/bill",
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
      <div id="printMe">
        <Challan
          data={options}
          remarks={remarks}
          name={name}
          startDate={startDate}
          remainingBalance={remainingBalance}
          customer={customer}
          // totalBalance={totalBalance}
          remainingBalanceAmount={remainingBalanceAmount}
          // totalBalanceAmount={totalBalanceAmount}
        />
      </div>
    </div>
  );
};

export default Invoice;

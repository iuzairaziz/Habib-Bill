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
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState();
  const [remarks, setRemarks] = useState();
  const [saletax, setSaleTax] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [country, setCountry] = useState([]);
  const [nature, setNature] = useState([]);
  // const [totalBalance, setTotalBalance] = useState();
  const [remainingBalance, setRemainingBalance] = useState();
  // const [totalBalanceAmount, setTotalBalanceAmount] = useState();
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
          <Link to="/add-customer">
            <Button>Add Customer</Button>
          </Link>
          <Link to="/add-product">
            <Button>Add Products</Button>
          </Link>
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
              <FormGroup row className="customer">
                <Label for="exampleSelect" sm={2}>
                  Select Customer
                </Label>
                <Col sm={10}>
                  <Select
                    options={country}
                    onChange={(name) => {
                      setName(name.label);
                    }}
                  />
                </Col>
              </FormGroup>
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
                  Items
                </Label>
                <Col sm={11}>
                  <Select
                    options={nature}
                    onChange={(name) => {
                      setItems(name.label);
                    }}
                  />
                </Col>
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
                      placeholder="Total Balance"
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
                      placeholder="Total Balance Amount "
                    />
                  </FormGroup>
                </Col>
              </Row> */}
              <Row className="customer">
                {" "}
                <Col md={6}>
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
                      placeholder="Remaing Balance"
                    />
                  </FormGroup>
                </Col>
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
                    { quantity, rate, unit, items },
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

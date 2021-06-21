import React, { useState } from "react";
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
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

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

  return (
    <div className="container">
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
                  <select
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  >
                    <option>Uzair</option>
                    <option>Irtaza </option>
                    <option>Habib </option>
                    <option>HassanO</option>
                    <option>Ali </option>
                  </select>
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
                  <select
                    value={items}
                    onChange={(e) => {
                      setItems(e.target.value);
                    }}
                  >
                    <option>Auramine O</option>
                    <option>Direct Red </option>
                    <option>Guar Gum </option>
                  </select>
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
                      type="text"
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
                      type="text"
                      name="password"
                      id="examplePassword"
                      placeholder="Rate "
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="enteries">
                {/* <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Sale Tax</Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="Enter Sale Tax" />
          </FormGroup>
        </Col> */}
                {/* <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">ADD S.T</Label>
                    <Input
                      value={saletax}
                      onChange={(e) => {
                        setSaleTax(e.target.value);
                      }}
                      type="text"
                      name="password"
                      id="examplePassword"
                      placeholder="ADD S.T "
                    />
                  </FormGroup>
                </Col> */}
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
            </div>
          </Form>
        </div>
      </div>
      <GSTtable
        data={options}
        remarks={remarks}
        name={name}
        startDate={startDate}
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

import React, { useState, useRef } from "react";
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
import Select from "react-select";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";

const Invoice = (props) => {
  const [options, setOptions] = useState([]);
  const [name, setName] = useState();
  const [items, setItems] = useState();
  const [unit, setUnit] = useState(0);
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState();
  const [remarks, setRemarks] = useState();

  return (
    <div className="container">
      <div className="row heading">
        <div className="col">
          <h1> Invoice </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form>
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
                      type="text"
                      name="password"
                      id="examplePassword"
                      placeholder="Rate "
                    />
                  </FormGroup>
                </Col>
              </Row>
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
      <div id="printMe">
        {" "}
        <Challan data={options} remarks={remarks} name={name} />
      </div>

      {/* <div>
        <Challan
          ref={componentRef}
          data={options}
          remarks={remarks}
          name={name}
        />
        <button onClick={handlePrint}>Print this out!</button>
      </div> */}
      {/* <div>
        <ReactToPrint
          onPrintError={(err) => console.log(err)}
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <Challan
          ref={componentRef}
          data={options}
          remarks={remarks}
          name={name}
        />
      </div> */}
    </div>
  );
};

export default Invoice;
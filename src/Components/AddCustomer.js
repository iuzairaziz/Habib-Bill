import React from "react";
import { Button } from "reactstrap";
import { Formik } from "formik";
import CountryService from "../Services/CustomerService";
import { BrowserRouter as Router, Link } from "react-router-dom";

const CountryForm = (props) => {
  return (
    <Formik
      initialValues={{
        title: props.editable && props.country.name,
      }}
      onSubmit={(values, actions) => {
        props.editable
          ? CountryService.updateCountry(props.country._id, {
              name: values.title,
            })
              .then((res) => {
                props.toggle();
                CountryService.handleMessage("update");
              })
              .catch((err) => {
                props.toggle();
                CountryService.handleError();
              })
          : CountryService.addCountry({ name: values.title })
              .then((res) => {
                CountryService.handleMessage("add");
                actions.setFieldValue("title", "");
              })
              .catch((err) => {
                CountryService.handleError();
              });
      }}
    >
      {(props) => {
        return (
          <>
            <div className="row">
              <div className="col">
                <Link to="/">
                  <Button>Invoice</Button>
                </Link>
                <Link to="/GST">
                  <Button>GST Invoice</Button>
                </Link>
                <Link to="/add-product">
                  <Button>Add Products</Button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Add Customer</label>
                  <input
                    type="text"
                    className="form-control"
                    value={props.values.title}
                    onChange={props.handleChange("title")}
                    placeholder="Enter Name"
                  />
                  <span id="err">
                    {props.touched.title && props.errors.title}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button
                  className="mt-3 my-primary-button"
                  onClick={props.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default CountryForm;

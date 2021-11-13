import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import CountryService from "../Services/CustomerService";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { MDBDataTableV5, MDBBtn } from "mdbreact";

const CountryForm = (props) => {
  const [country, setCountry] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);
  const [selectedNature, setSelectedNature] = useState({ name: "" });

  // const getCountry = () => {
  //   CountryService.getAllCountry().then((res) => {
  //     let options = [];
  //     res.data.map((item, index) => {
  //       options.push({
  //         label: item.name,
  //         value: item._id,
  //       });
  //       setCountry(options);
  //       // console.log("Customers", res.data);
  //       // console.log("Cus", options);
  //     });
  //   });
  // };

  const [data, setData] = useState({
    columns: [
      {
        label: "Title",
        field: "title",
        sort: "asc",
        // width: 150,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        // width: 150,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getCountry();
  }, [modalDelete]);

  const handleDelete = (id) => {
    CountryService.deleteCountry(id)
      .then((res) => {
        CountryService.handleMessage("delete");
        toggleDelete();
      })
      .catch((err) => {
        CountryService.handleError();
        toggleDelete();
      });
  };

  const getCountry = () => {
    CountryService.getAllCountry()
      .then((res) => {
        let updatedData = { ...data };
        updatedData.rows = [];
        res.data.map((item, index) => {
          updatedData.rows.push({
            title: item.name ? item.name : "none",
            action: (
              <Button
                className="mt-3 my-primary-button"
                onClick={() => {
                  setSelectedNature(item);
                  toggleDelete();
                }}
              >
                Delete
              </Button>
            ),
          });
        });
        console.log("customers", updatedData);
        setData(updatedData);
      })
      .catch((err) => console.log(err));
  };

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
            <div className="row mt-2">
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
            <div className="row mt-4">
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
            <div className="row mb-3">
              <div className="col ml-3">
                <Button
                  className="mt-3 my-primary-button ml-3"
                  onClick={props.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="card">
              <div className="card-body ml-3">
                <div className="row">
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered={true}
                    searchTop
                    searchBottom={false}
                    pagingTop
                    hover
                    data={data}
                  />
                  <Modal isOpen={modalDelete} toggle={toggleDelete}>
                    <ModalHeader toggle={toggleDelete}>
                      Delete Customer?
                    </ModalHeader>
                    <ModalBody>
                      Are you sure you want to delete the Customer "
                      {selectedNature.name}" ?
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="primary"
                        onClick={() => {
                          handleDelete(selectedNature._id);
                        }}
                      >
                        Yes
                      </Button>{" "}
                      <Button color="secondary" onClick={toggleDelete}>
                        No
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default CountryForm;

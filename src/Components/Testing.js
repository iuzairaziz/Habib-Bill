import React from "react";
import { Table } from "reactstrap";
import "./Testing.scss";
import moment from "moment";

const Challan = (props) => {
  let GrossTotal = 0;
  const data = props.data;
  const remarks = props.remarks;
  const name = props.name;
  const startDate = moment(props.startDate).format("DD-MMM-YYYY");

  return (
    <div className="container">
      <div className=" row Heading">
        <h1>Challan</h1>
      </div>
      <div className="container">
        <div className="row">
          <h6>Date: {startDate}</h6>
        </div>
        {/* <div className="row subhead">
          <h5> M/S: {name} </h5>
        </div> */}
        <div className="row">
          <h5>M/S: {name}</h5>
        </div>

        <div className="row">
          <p>Remarks : {remarks}</p>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Unit</th>
              <th>Items</th>
              <th>Rate</th>
              <th>Total</th>
              {/* <th>Gross Total</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              GrossTotal += item.rate * item.quantity;
              return (
                <tr>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.items}</td>
                  <td>{item.rate}</td>
                  <td>{item.rate * item.quantity}</td>
                </tr>
              );
            })}
            <tr className="total">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Gross Total : </th>
              <th>{GrossTotal}</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Challan;

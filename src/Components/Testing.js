import React from "react";
import { Table } from "reactstrap";
import "./Testing.scss";

const Challan = (props) => {
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var dateTime = date;
  let GrossTotal = 0;
  const data = props.data;
  const remarks = props.remarks;
  const name = props.name;
  return (
    <div className="container">
      <div className=" row Heading">
        <h1>Challan</h1>
      </div>
      <div className="container">
        <div className="row subhead">
          <h5> {name} </h5>
          <h6>Date: {dateTime}</h6>
        </div>
        <div className="row remarks">
          <p>Remarks : {remarks}</p>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Unit</th>
              <th>Goods</th>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Gross Total : </th>
              <td>{GrossTotal}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Challan;
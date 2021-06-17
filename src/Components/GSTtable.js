import React from "react";
import { Table } from "reactstrap";
import "./GSTtable.scss";

const GSTtable = (props) => {
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var dateTime = date;

  let GrossTotal = 0;
  let Saletax = 0;
  let GST = 0;
  let ADDST = 0;
  let TaddST;
  const data = props.data;
  const remarks = props.remarks;
  const name = props.name;
  const AddST = props.saletax;

  return (
    <div className="container">
      <div className=" row Heading">
        <h1>Challan</h1>
      </div>
      <div className="container">
        <div className="row subhead">
          <h5>Cutomer Name: {name} </h5>
          <h6>Date: {dateTime}</h6>
        </div>
        <div className="row remarks">
          <p>Remarks : {remarks}</p>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Goods</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Rate</th>
              <h>Total</h>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
            {data.map((item, index) => {
              GrossTotal += item.rate * item.quantity + Saletax + ADDST;
              Saletax =
                item.rate * item.quantity + item.rate * item.quantity * 0.17;
              GST = item.rate * item.quantity * 0.17;
              // ADDST = item.saletax;
              // TaddST =
              //   item.rate * item.quantity * 0.17 +
              //   item.rate * item.quantity * 100(item.saletax / 100);

              return (
                <tr>
                  <td>{item.items}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.rate}</td>
                  <td>{item.rate * item.quantity}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>GST</th>
              <td>17%</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Total including GST</th>
              <td>{GST.toFixed(2)}</td>
            </tr>
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Additional Sales Tax</th>
              <td>{AddST}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Total including AST</th>
              <td>{TaddST}</td>
            </tr> */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Gross Total</th>
              <td>{Saletax}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default GSTtable;

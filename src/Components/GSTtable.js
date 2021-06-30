import React from "react";
import { Table } from "reactstrap";
import "./GSTtable.scss";
import moment from "moment";

const GSTtable = (props) => {
  let NetTotal = 0;
  let GrossTotal = 0;
  let Saletax = 0;
  let GST = 0;
  const data = props.data;
  const remarks = props.remarks;
  const name = props.name;
  const AddST = props.saletax;
  const startDate = moment(props.startDate).format("DD/MMM/YYYY");

  return (
    <div className="container">
      <div className="row">
        <h1>CHALLAN / QUOTATION</h1>
      </div>
      <div className="container">
        <div className="row subhead">
          <h6>Date: {startDate}</h6>
          <h5>Cutomer Name: {name} </h5>
        </div>
        <div className="row remarks">
          <p>{remarks}</p>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>Value Without GST</th>
              <th>GST 17%</th>
              <th>Value With GST</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td></td>
            </tr> */}
            {data.map((item, index) => {
              NetTotal += item.rate * item.quantity;
              GrossTotal +=
                item.rate * item.quantity + item.rate * item.quantity * 0.17;
              Saletax =
                item.rate * item.quantity + item.rate * item.quantity * 0.17;
              GST += item.rate * item.quantity * 0.17;
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
                  <td>{(item.rate * item.quantity * 0.17).toFixed(2)}</td>
                  <td>
                    {item.rate * item.quantity +
                      item.rate * item.quantity * 0.17}
                  </td>
                </tr>
              );
            })}
            <tr className="total">
              <td></td>
              <td></td>
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
              <th>Net Total</th>
              <td>{NetTotal}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>GST 17%</th>
              <td>{GST.toFixed(2)}</td>
            </tr>
            <tr></tr>
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Total including GST</th>
              <td>{GST.toFixed(2)}</td>
            </tr> */}
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
              <td></td>
              <td></td>
              <th>Gross Total</th>
              <td>{GrossTotal}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <p>* Goods once sold cannot be exchanged or returned</p>
    </div>
  );
};

export default GSTtable;

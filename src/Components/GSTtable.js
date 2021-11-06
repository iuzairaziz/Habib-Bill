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
  const remainingBalance = props.remainingBalance;
  const totalBalance = props.totalBalance;
  const remainingBalanceAmount = props.remainingBalanceAmount;
  const totalBalanceAmount = props.totalBalanceAmount;

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
              <th>Value W/O GST</th>
              <th>GST 17%</th>
              <th>Value With GST</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              NetTotal += item.rate * item.quantity;
              GrossTotal +=
                item.rate * item.quantity + item.rate * item.quantity * 0.17;
              Saletax =
                item.rate * item.quantity + item.rate * item.quantity * 0.17;
              GST += item.rate * item.quantity * 0.17;

              return (
                <tr>
                  <td className="widthh">{item.items}</td>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>Gross Total</th>
              <td>{GrossTotal}</td>
            </tr>
            {remainingBalance ? (
              <>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th>{remainingBalance} </th>
                  <th>{remainingBalanceAmount} </th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th>{totalBalance}</th>
                  <th>{totalBalanceAmount}</th>
                </tr>
              </>
            ) : null}
          </tbody>
        </Table>
      </div>
      <p>* Goods once sold cannot be exchanged or returned</p>
    </div>
  );
};

export default GSTtable;

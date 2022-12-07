import React from "react";
import { Table } from "reactstrap";
import "./Testing.scss";
import moment from "moment";

const Challan = (props) => {
  let GrossTotal = 0;

  const data = props.data;
  const remarks = props.remarks;
  const name = props.name;
  const customer = props.customer;
  const startDate = moment(props.startDate).format("DD-MMM-YYYY");
  const remainingBalance = props.remainingBalance;
  // const totalBalance = props.totalBalance;
  const remainingBalanceAmount = props.remainingBalanceAmount;
  // const totalBalanceAmount = props.totalBalanceAmount;
  let AllBalance = remainingBalanceAmount;

  return (
    <div className="container">
      <div className=" row Heading">
        <h1>Challan</h1>
      </div>
      <div className="container">
        <div className="row">
          <h6>Date: {startDate}</h6>
        </div>
        <div className="row">
          <h5>M/S: {customer}</h5>
        </div>

        <div className="row">
          <p>{remarks}</p>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Unit</th>
              <th>Items</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              // console.log("dttaa", data);
              GrossTotal += item.rate * item.quantity;
              return (
                <tr>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.product}</td>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <th>Bill Amount: </th>
              <th>{GrossTotal}</th>
            </tr>
            {remainingBalanceAmount ? (
              <>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th>Previous Balance </th>
                  <th>{remainingBalanceAmount} </th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>

                  <th>Total Balance</th>
                  <th>{Number(AllBalance) + Number(GrossTotal)}</th>
                </tr>
              </>
            ) : null}
          </tbody>
        </Table>
        <div>
          <p>* Goods once sold cannot be exchanged or returned</p>
        </div>
      </div>
    </div>
  );
};

export default Challan;

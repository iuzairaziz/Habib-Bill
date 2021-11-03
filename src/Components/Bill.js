import React from "react";
import Challan from "./Testing";
import moment from "moment";

const Bill = (props) => {
  const options = props.location.BillProps;
  // const remainingBalance = props.remainingBalance;
  // const totalBalance = props.totalBalance;
  // const remainingBalanceAmount = props.remainingBalanceAmount;
  // const totalBalanceAmount = props.totalBalanceAmount;
  console.log("name", props.location.BillProps);
  <style type="text/css">{`.navbar {display: none}`}</style>;
  return (
    <Challan
      data={options.data}
      remarks={options.remarks}
      name={options.name}
      startDate={options.startDate}
      remainingBalance={options.remainingBalance}
      totalBalance={options.totalBalance}
      remainingBalanceAmount={options.remainingBalanceAmount}
      totalBalanceAmount={options.totalBalanceAmount}
    />
  );
};

export default Bill;

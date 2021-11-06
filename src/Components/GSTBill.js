import React from "react";
import GSTChallan from "./GSTtable";

const GSTBill = (props) => {
  const options = props.location.BillProps;

  return (
    <GSTChallan
      data={options.data}
      remarks={options.remarks}
      name={options.name}
      startDate={options.startDate}
      remainingBalance={options.remainingBalance}
      // totalBalance={options.totalBalance}
      remainingBalanceAmount={options.remainingBalanceAmount}
      // totalBalanceAmount={options.totalBalanceAmount}
    />
  );
};

export default GSTBill;

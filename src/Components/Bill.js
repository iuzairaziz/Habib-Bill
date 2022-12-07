import React from "react";
import Challan from "./Testing";
import moment from "moment";

const Bill = (props) => {
  const options = props.location.BillProps;
  <style type="text/css">{`.navbar {display: none}`}</style>;
  return (
    <Challan
      data={options.data}
      remarks={options.remarks}
      name={options.name}
      customer={options.customer}
      startDate={options.startDate}
      remainingBalance={options.remainingBalance}
      // totalBalance={options.totalBalance}
      remainingBalanceAmount={options.remainingBalanceAmount}
      // totalBalanceAmount={options.totalBalanceAmount}
    />
  );
};

export default Bill;

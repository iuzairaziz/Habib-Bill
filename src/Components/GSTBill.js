import React from "react";
import GSTChallan from "./GSTtable";

const GSTBill = (props) => {
  const options = props.location.BillProps;
  console.log("name", props.location.BillProps);

  return (
    <GSTChallan
      data={options.data}
      remarks={options.remarks}
      name={options.name}
      startDate={options.startDate}
    />
  );
};

export default GSTBill;

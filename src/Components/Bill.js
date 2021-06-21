import React from "react";
import Challan from "./Testing";
import moment from "moment";

const Bill = (props) => {
  const options = props.location.BillProps;
  console.log("name", props.location.BillProps);

  return (
    <Challan
      data={options.data}
      remarks={options.remarks}
      name={options.name}
      startDate={options.startDate}
    />
  );
};

export default Bill;

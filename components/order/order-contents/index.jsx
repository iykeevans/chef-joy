import React from "react";
import OrderChefInfo from "../order-chef-info";
import OrderContent from "./order-content";

function OrderContents(props) {
  return (
    <div {...props}>
      <OrderChefInfo className="flex items-center border-b pb-5 mb-5" />

      <OrderContent />
    </div>
  );
}

export default OrderContents;

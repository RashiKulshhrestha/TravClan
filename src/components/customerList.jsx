import React, { Fragment, useContext } from "react";
import { CustomerContext } from "./customerContext";
import Spinner from "./Spinner";

const CustomerList = () => {
  const [customerList, setCustomerList, loading] = useContext(CustomerContext);
  return (
    <div>
      {!loading ? (
        <Fragment>
          {customerList.map((item) => {
            return <div>{item.firstname} </div>;
          })}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CustomerList;

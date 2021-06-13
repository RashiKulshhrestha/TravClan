import React, { Fragment, useContext } from "react";
import CustomerCard from "./CustomerCard";
import { CustomerContext } from "./CustomerContext";
import Spinner from "./Spinner";

const CustomerList = () => {
  const [customerList, setCustomerList, loading] = useContext(CustomerContext);
  return (
    <div>
      {!loading ? (
        <Fragment>
          {customerList.map((item) => {
            return <CustomerCard list={item} />;
          })}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CustomerList;

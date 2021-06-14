import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [defaultBid, setDefaultBid] = useState("max");
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCustomerList();
  }, []);

  const getCustomerList = async () => {
    const result = await axios(
      "https://intense-tor-76305.herokuapp.com/merchants"
    );
    setCustomerList(result.data);
    setLoading(false);
  };
  return (
    <CustomerContext.Provider
      value={[
        customerList,
        setCustomerList,
        loading,
        setLoading,
        defaultBid,
        setDefaultBid,
        rowsPerPage,
        setRowsPerPage,
        currentPage,
        setCurrentPage,
      ]}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

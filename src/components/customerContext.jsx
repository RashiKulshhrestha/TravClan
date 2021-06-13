import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
  const [customerList, setCustomerList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCustomerList = async () => {
      const result = await axios(
        "https://intense-tor-76305.herokuapp.com/merchants"
      );
      setCustomerList(result.data);
      setLoading(false);
    };
    getCustomerList();
  }, []);

  return (
    <CustomerContext.Provider value={[customerList, setCustomerList, loading]}>
      {props.children}
    </CustomerContext.Provider>
  );
};

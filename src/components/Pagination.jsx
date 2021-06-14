import { Button } from "@material-ui/core";
import React, { Fragment, useContext } from "react";
import { CustomerContext } from "./CustomerContext";

const Pagination = () => {
  const [
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
  ] = useContext(CustomerContext);

  const totalPages = Math.ceil(customerList.length / rowsPerPage);

  const displayPagination = () => {
    var paginationButton = [];
    for (var i = 1; i <= totalPages; i++) {
      paginationButton.push(i);
    }
    console.log(paginationButton);
    return paginationButton.map((item) => (
      <Button
        variant="contained"
        color="primary"
        key={item.id}
        onClick={() => setCurrentPage(item)}
      >
        {item}
      </Button>
    ));
  };
  return <div>{displayPagination()}</div>;
};

export default Pagination;

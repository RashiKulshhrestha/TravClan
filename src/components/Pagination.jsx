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
    return (
      <div>
        <Button>Current Page:{currentPage}</Button>
        {paginationButton.map((item) => (
          <Button
            variant="contained"
            color="primary"
            key={item.id}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    );
  };
  return <div className="pagination-wrapper">{displayPagination()}</div>;
};

export default Pagination;

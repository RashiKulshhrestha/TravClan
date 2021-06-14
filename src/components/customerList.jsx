import {
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import React, { Fragment, useContext, useState } from "react";
import CustomerCard from "./CustomerCard";
import { CustomerContext } from "./CustomerContext";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 40,
  },
  selectEmpty: {
    marginTop: theme.spacing(10),
  },
}));
const CustomerList = () => {
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
  const [sort, setSort] = useState(0);

  const classes = useStyles();

  const getBidData = (bidArray, key) => {
    if (bidArray) {
      let bids = [];
      bidArray.forEach((eachBid) => {
        bids.push(eachBid.amount);
      });
      if (key === "max") {
        return Math.max(...bids) !== -Infinity ? Math.max(...bids) : "NA";
      } else {
        return Math.max(...bids) !== -Infinity ? Math.min(...bids) : "NA";
      }
    } else {
      return "Invalid Data";
    }
  };
  const toggleDefaultBid = () => {
    defaultBid === "max" ? setDefaultBid("min") : setDefaultBid("max");
  };
  const getUpdatedlist = () => {
    return customerList.map((data) => {
      const max_val = getBidData(data.bids, "max");
      const min_val = getBidData(data.bids, "min");
      return { ...data, max: max_val, min: min_val };
    });
  };
  return (
    <div>
      {!loading ? (
        <div>
          <div className="clicktoAction">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                name="sortDropDown"
                onChange={(e) => {
                  setSort(parseInt(e.target.value));
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value="0">Choose...</MenuItem>
                <MenuItem value="1">Asc Order</MenuItem>
                <MenuItem value="2">Desc Order</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => toggleDefaultBid()}
            >
              show {defaultBid === "max" ? "min" : "max"} bid
            </Button>
          </div>
          <Fragment>
            <CustomerCard list={getUpdatedlist()} sort={sort} />
          </Fragment>
          <div>
            <Pagination />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CustomerList;

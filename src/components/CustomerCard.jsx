import { Avatar, FormLabel, ListItemText, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import react, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerContext } from "./CustomerContext";
import Spinner from "./Spinner";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const CustomerCard = ({ list, sort }) => {
  console.log(list);
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

  const classes = useStyles();
  const indexofLastCustomer = currentPage * rowsPerPage;
  const indexOfFirstCustomer = indexofLastCustomer - rowsPerPage;
  let currentCustomer;
  if (sort === 0) {
    currentCustomer = list.slice(indexOfFirstCustomer, indexofLastCustomer);
  } else if (sort === 1) {
    currentCustomer = list
      .sort((a, b) => {
        return a[defaultBid] - b[defaultBid];
      })
      .slice(indexOfFirstCustomer, indexofLastCustomer);
  } else if (sort === 2) {
    currentCustomer = list
      .sort((a, b) => {
        return b[defaultBid] - a[defaultBid];
      })
      .slice(indexOfFirstCustomer, indexofLastCustomer);
  }
  console.log(currentCustomer);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {console.log(currentCustomer)}
          {currentCustomer.map((item) => {
            return (
              <Paper elevation={5}>
                <div className="Customer-card-wrapper" key={item.id}>
                  <Avatar
                    src={item.avatarUrl}
                    alt={item.firstname}
                    className={classes.large}
                  />
                </div>
                <div>
                  <FormLabel>Customer's Name :</FormLabel>
                  {item.firstname} {item.lastname} <br />
                  <FormLabel>Email :</FormLabel> {item.email} <br />
                  <FormLabel>Phone :</FormLabel> {item.phone} <br />
                  <FormLabel>Premium Customer :</FormLabel>{" "}
                  {item.hasPremium ? "Yes" : "No"}
                </div>
                <div>
                  <FormLabel>{defaultBid} Bid :</FormLabel>
                  {item[defaultBid]}
                  <br />
                  <Link to={"/user/" + item.id}>
                    Click Here to see ALL Bids
                  </Link>
                </div>
              </Paper>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomerCard;

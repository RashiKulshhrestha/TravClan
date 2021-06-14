import react, { useContext } from "react";
import { CustomerContext } from "./CustomerContext";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CustomerBid = ({ match }) => {
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

  const getCreatedTime = (milliTime) => {
    return Date(milliTime).split("GMT")[0];
  };
  const GetBids = () => {
    if (!loading) {
      const customerID = match.url.split("/")[2];
      const selectedCustomer = customerList.filter(
        (item) => item.id === customerID
      )[0];
      if (selectedCustomer.bids) {
        if (selectedCustomer.bids.length > 0) {
          return (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Car</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Created At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {console.log(selectedCustomer.bids)}
                  {selectedCustomer.bids.map((list) => {
                    return (
                      <TableRow key={list.id}>
                        <TableCell component="th" scope="row">
                          {list.carTitle}
                        </TableCell>
                        <TableCell align="right">{list.amount}</TableCell>
                        <TableCell align="right">
                          {getCreatedTime(list.created)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          );
          return;
        } else {
          return <div>No Data Found</div>;
        }
      } else {
        return <div>Invalid Data</div>;
      }
    } else {
      return <div>Fetching Details...</div>;
    }
  };
  return (
    <div>
      <GetBids />
    </div>
  );
};
export default CustomerBid;

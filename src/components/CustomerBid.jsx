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
            <div className="customer-bid-table">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Car</strong>
                      </TableCell>
                      <TableCell align="right">
                        <strong>Amount</strong>
                      </TableCell>
                      <TableCell align="right">
                        <strong>Created At</strong>
                      </TableCell>
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
            </div>
          );
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
    <div className="customer-bid-wrapper">
      <GetBids />
    </div>
  );
};
export default CustomerBid;

import { connect } from 'react-redux';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/icons/Button';
import { retrieveTransaction, deleteTransaction, clearModification } from '../store/actions';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  icons: {
    cursor: 'pointer'
  }
});

const deleteTrx = (props, index) => {
  if (window.confirm("Please confirm that you want to delete this transaction")) {
    props.deleteTransaction(index);
    props.clearModification();
  }
}

const retrieveTrx = (props, index) => {
  props.retrieveTransaction(index);
}

const ReturnedTransactions = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Transaction Date</StyledTableCell>
            <StyledTableCell align="right">Payee Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Memo</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allTransactions.map((eachTransaction, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell scope="row">
                {eachTransaction.date}
              </StyledTableCell>
              <StyledTableCell align="right">{eachTransaction.name}</StyledTableCell>
              <StyledTableCell align="right">{eachTransaction.amount}</StyledTableCell>
              <StyledTableCell align="right">{eachTransaction.memo}</StyledTableCell>
              <StyledTableCell align="right"><Edit onClick={() => retrieveTrx(props, index)} className={classes.icons} /></StyledTableCell>
              <StyledTableCell align="right"><Clear onClick={() => deleteTrx(props, index)} className={classes.icons} /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<GetAppIcon />}
      >
        Upload
      </Button>
    </TableContainer>
  );
}



const mapStateToProps = (state) => {
  return {
    allTransactions: state.transactionsArray
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveTransaction: index => dispatch(retrieveTransaction(index)),
    deleteTransaction: index => dispatch(deleteTransaction(index)),
    clearModification: () => dispatch(clearModification())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturnedTransactions);
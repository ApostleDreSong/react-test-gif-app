import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { addTransaction, clearStore, modifyTransaction, clearModification } from '../store/actions';
import ReturnedTransactions from './returnedTransactions';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import clsx from 'clsx';

const memo = {
    'multiline': true,
};

const styles = {
    trx:{
    	padding : "25px 0"
    }
  };

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: "",
            amount: "",
            memo: "",
            modifyIndex: ""
        };

    };

    addNewTransaction = (e) => {
        e.preventDefault();
        if (this.props.modifyArr !== undefined) {
            this.props.modifyTransaction({
                name: this.state.name,
                date: this.state.date,
                amount: this.state.amount,
                memo: this.state.memo
            });
        } else {
            this.props.addTransaction([{
                name: this.state.name,
                date: this.state.date,
                amount: this.state.amount,
                memo: this.state.memo
            }]);
        }
        this.setState({
            modifyIndex: ""
        });
        this.props.clearModification();
        this.clearScreen();
    };

    handleChange = (e, details) => {
        switch (details) {
            case 'date':
                this.setState({
                    date: e.target.value
                });
                break;
            case 'name':
                this.setState({
                    name: e.target.value
                });
                break;
            case 'amount':
                this.setState({
                    amount: e.target.value
                });
                break;
            case 'memo':
                this.setState({
                    memo: e.target.value
                });
                break;
            default:

                break;
        }
    }

    clearScreen = () => {
        this.setState({
            name: "",
            date: "",
            amount: "",
            memo: ""
        });
    }

    clearStore = () => {
        this.props.clearStore();
    };

    static getDerivedStateFromProps(props, state) {
        if (props.modifyIndex !== state.modifyIndex) {
            if (props.modifyArr !== undefined) {
                const { name, date, memo, amount } = props.modifyArr[0];
                return {
                    name: name,
                    date: date,
                    memo: memo,
                    amount: amount,
                    modifyIndex: props.modifyIndex
                }
            }
        }
        return null;
    }

    render() {
    	const { classes } = this.props;
        return (
            <div>
                <Box
                	className={clsx(classes.trx)}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width = "100%"
                    flexDirection = "column"
                >
                    <form id="transactionForm" onSubmit={this.addNewTransaction}>
                        <TextField
                            id="date"
                            label="Transaction Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={this.state.date}
                            onChange={(e) => this.handleChange(e, 'date')}
                        />
                        <div>
                            <TextField
                                name="name"
                                label="Payee Name"
                                type="text"
                                required
                                value={this.state.name}
                                onChange={(e) => this.handleChange(e, 'name')}
                            />
                        </div>
                        <div>
                            <TextField
                                name="amount"
                                label="Amount"
                                value={this.state.amount}
                                type="number"
                                onChange={(e) => this.handleChange(e, 'amount')} />
                        </div>
                        <div>
                            <TextField
                                name="memo"
                                label="Memo"
                                type="text"
                                InputProps={memo}
                                value={this.state.memo}
                                onChange={(e) => this.handleChange(e, 'memo')} />
                        </div>
                        <div>
                            <button type="submit">
                                {this.state.modifyIndex === "" ? 'Add' : 'Modify'}
                            </button>
                            <button onClick={this.clearScreen}>
                                Clear
                        </button>

                        </div>
                    </form>
                    <button onClick={this.clearStore}>
                        Clear Store
                </button>
                </Box>
                <ReturnedTransactions />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: transaction => dispatch(addTransaction(transaction)),
        clearStore: () => dispatch(clearStore()),
        modifyTransaction: transaction => dispatch(modifyTransaction(transaction)),
        clearModification: () => dispatch(clearModification())
    };
}

const mapStateToProps = (state) => {
    return {
        modifyObj: state.modifierObject,
        modifyArr: state.modifierObject.modifierArray,
        modifyIndex: state.modifierObject.modifierIndex,
    };
}

export default compose(withStyles(styles),connect(mapStateToProps, mapDispatchToProps))(Transactions);
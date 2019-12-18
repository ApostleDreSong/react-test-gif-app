import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MonthlyContribution from './monthlyContribution';
import YearlyContribution from './yearlyContribution';
import ContributionChange from './contributionChange';
import AverageContribution from './averageContribution';

const useStyles = makeStyles(theme => ({
  dashboardMain : {
        display : 'flex',
        justifyContent : 'space-evenly',
        flexWrap : 'wrap',
        margin : '30px 10px'
    },
    eachChart : {
        textAlign : 'center',
        overflow : 'auto',
        [theme.breakpoints.up('sm')]: {
            flexBasis : '100%'
        },
        [theme.breakpoints.up('md')]: {
            flexBasis : '45%'
        },
    }
}));

function Dashboard(){
    const classes = useStyles();
    return (
        <div className={classes.dashboardMain}>
        	<div className={classes.eachChart}>
            <MonthlyContribution />
            </div>
            <div className={classes.eachChart}>
            <YearlyContribution />
            </div>
            <div className={classes.eachChart}>
            <ContributionChange />
            </div>
            <div className={classes.eachChart}>
            <AverageContribution />
            </div>
        </div>
    );
}

export default Dashboard;
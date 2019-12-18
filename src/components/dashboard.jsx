import React, { Component } from 'react';
import MonthlyContribution from './monthlyContribution';
import YearlyContribution from './yearlyContribution';
import ContributionChange from './contributionChange';
import AverageContribution from './averageContribution';

const style = {
    dashboardMain : {
    	display : 'flex',
    	justifyContent : 'space-evenly',
    	flexWrap : 'wrap',
    	margin : '30px 10px'
    },
    eachChart : {
    	flexBasis : '45%',
    	textAlign : 'center'
    }
};

class Dashboard extends Component {
    render() {
        return (
            <div style={style.dashboardMain}>
            	<div style={style.eachChart}>
                <MonthlyContribution />
                </div>
                <div style={style.eachChart}>
                <YearlyContribution />
                </div>
                <div style={style.eachChart}>
                <ContributionChange />
                </div>
                <div style={style.eachChart}>
                <AverageContribution />
                </div>
            </div>
        );
    }
}

export default Dashboard;
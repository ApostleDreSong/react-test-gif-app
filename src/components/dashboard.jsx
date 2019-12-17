import React, { Component } from 'react';
import MonthlyContribution from './monthlyContribution';
import YearlyContribution from './yearlyContribution';
import ContributionChange from './contributionChange';
import AverageContribution from './averageContribution';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <MonthlyContribution />
                <YearlyContribution />
                <ContributionChange />
                <AverageContribution />
            </div>
        );
    }
}

export default Dashboard;
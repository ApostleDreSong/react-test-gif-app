import React, { Component } from 'react';
import MonthlyContribution from './monthlyContribution';
import YearlyContribution from './yearlyContribution';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <MonthlyContribution />
                <YearlyContribution />
            </div>
        );
    }
}

export default Dashboard;
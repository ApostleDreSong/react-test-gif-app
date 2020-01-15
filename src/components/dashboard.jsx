import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

        </div>
    );
}

export default Dashboard;
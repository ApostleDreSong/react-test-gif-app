import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const menuStyle = {
    textDecoration : 'none',
    color : 'blue'
  }

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <Router >
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <Link style={menuStyle} to="/about"><BottomNavigationAction label="About" icon={<FavoriteIcon />} /></Link>
            </BottomNavigation>
        </Router>
    );
}

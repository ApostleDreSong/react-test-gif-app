import React,{Component} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withRouter} from 'react-router-dom';

const style = {
    footerContainer : {
        width: '100%',
        marginTop : '25px',
        backgroundColor: '#252525'
    },
    nav : {
        color : 'white'
    }
};

class Footer extends Component{
    reRoute = (route) =>{
        this.props.history.push(route);
    };
    render(){
    return (
            <BottomNavigation
                showLabels
                style = {style.footerContainer}
            >
                <BottomNavigationAction style = {style.nav} label="About" icon={<FavoriteIcon />} onClick = {()=>this.reRoute('/about')}/>
            </BottomNavigation>
    );
    }
}

export default withRouter(Footer);


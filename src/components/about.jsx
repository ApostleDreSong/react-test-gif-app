import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withRouter} from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const style = {
    paperStyle : {
        height: '85%',
        width: '85%',
        margin: '7%',
        justifyContent: 'flex-start',
        display: 'flex',
        alignItems: 'center'
    },
    imgContainer : {
        overflow : 'hidden',
        borderRadius : '1%',
        width : '400px',
        height : '400px',
        boxSizing : 'border-box'
    },
    heading : {
        textAlign : 'center'
    },
    about : {
        marginLeft : '20px',
        marginRight : '10px',
    }
};

class About extends Component {
    reRoute = (route) =>{
        window.open(
          route,
          '_blank' // <- This is what makes it open in a new window.
        );
    };
    render() {
        return (
            <Paper style={style.paperStyle}>
                <div style={style.imgContainer}>
                    <img src="https://i.pravatar.cc/500" alt=""/>
                </div>
                <div style={style.about}>
                    <h2 style={style.heading}>Damilare ADEMESO</h2>
                    <p> Damilare is a full-stack Javascript Developer fluent in the following technologies:</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Material UI</li>
                        <li>Bootstrap</li>
                        <li>React.JS</li>
                        <li>Node.JS/Express.JS</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Wordpress</li>
                        <li>Git</li>
                    </ul>
                    <p>He also does a little of hybrid mobile app development with ReactNative.</p>
                    <p>Damilare has development experience with Interswitch, Zijela ICT and SahelConsulting</p>
                    <div>
                        <GitHubIcon onClick = {()=>this.reRoute('https://github.com/ApostleDreSong')}/>
                        <LinkedInIcon onClick = {()=>this.reRoute('https://www.linkedin.com/in/damilare-ademeso-b43205130/')}/>
                        <TwitterIcon onClick = {()=>this.reRoute('https://twitter.com/dresongafrika')}/>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default withRouter(About);
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const paperStyle = {
    height: '85%',
    width: '85%',
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block'
};

class About extends Component {
    render() {
        return (
            <Paper style={paperStyle} zDepth={5}>
                <p>
                    Damilare ADEMESO
                </p>
            </Paper>
        );
    }
}

export default About;
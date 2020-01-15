import React from 'react';
import { connect } from 'react-redux';
import {Grid} from '@material-ui/core'

function Dashboard(props) {
    return (
        <Grid>
            {props.gifContent.map((gif,index)=>{
                return (
                    <div key={index}>
                        {console.log(gif)}
                    </div>
                );
            })}
        </Grid>
    );
}

const MapStateToProps = state => {
    return {
        gifContent : state.gifContent
    }
}

export default connect(
    MapStateToProps,
)(Dashboard);
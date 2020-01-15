import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core'

function Dashboard(props) {
    return (
        <Grid container spacing={5}>
            {props.gifContent.map((gif, index) => {
                return (
                    <Grid item key={index} xs={12}>
                        <img width="100%" src={gif.images.original.url} alt="" />
                    </Grid>
                );
            })}
        </Grid>
    );
}

const MapStateToProps = state => {
    return {
        gifContent: state.gifContent
    }
}

export default connect(
    MapStateToProps,
)(Dashboard);
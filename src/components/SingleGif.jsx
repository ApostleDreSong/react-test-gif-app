import React from 'react';
import { connect } from 'react-redux';
import { Grid, Card } from '@material-ui/core';
import { withRouter } from "react-router";
import { compose } from 'redux'

function singleGif(props) {
    return (
        <Card style={{ marginTop: "10px" }} >
            <h2>{props.singleGifContent.title}</h2>
            <Grid container>
                <Grid item xs={6} md={3}>
                    <img width="100%" height="250px" src={props.singleGifContent.images.original.url} alt="" />
                </Grid>
            </Grid>
        </Card>
    );
}

const MapStateToProps = state => {
    return {
        singleGifContent: state.singleGifContent
    }
}

export default compose(connect(
    MapStateToProps
), withRouter)(singleGif);
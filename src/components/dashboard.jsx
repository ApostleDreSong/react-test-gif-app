import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withRouter } from "react-router";
import { compose } from 'redux';
import { singleGif } from '../store/actions';
import Pagination from "material-ui-flat-pagination";
import { storeSearch } from '../store/actions';
import Spinner from './Spinner'

function Dashboard(props) {
    const singleGif = (gif) => {
        props.singleGif(gif);
        props.history.push("/single-gif");
    }
    const [iniOffset, setIniOffset] = useState(props.pagination.offset);
    const handlePage = (offset) => {
        console.log(offset);
        setIniOffset(offset);
        props.storeSearch(props.searchTerm, offset);
    }
    return (
        <div>
            <Grid container style={{ marginTop: "10px" }} spacing={5}>
                <Grid item xs={12}>
                    {props.updating ? <Spinner /> : null}
                    {props.error ? <div style={{ color: "red" }}>There was an error retrieving your search. Please try again...</div> : null}
                    {props.updating ? null : <h2>{props.searchTerm}</h2>}
                </Grid>
                {props.gifContentData.map((gif, index) => {
                    return (
                        <Grid style={{ cursor: "pointer" }} onClick={() => singleGif(gif)} item key={index} xs={6} md={3}>
                            <img width="100%" height="250px" src={gif.images.original.url} alt="" />
                        </Grid>
                    );
                })}
            </Grid>
            {props.updating ? null :
                <Pagination
                    limit={1}
                    offset={iniOffset}
                    total={props.pagination.total_count}
                    onClick={(e, offset) => handlePage(offset)}
                />
            }
        </div>
    );
}

const MapStateToProps = state => {
    return {
        gifContentData: state.gifContent.data,
        pagination: state.gifContent.pagination,
        searchTerm: state.searchTerm,
        updating: state.updating,
        error: state.error
    }
}

const MapDispatchToProps = dispatch => {
    return {
        singleGif: (gif) => dispatch(singleGif(gif)),
        storeSearch: (searchTerm, offset) => {
            dispatch(storeSearch(searchTerm, offset))
        }
    }
}

export default compose(connect(
    MapStateToProps,
    MapDispatchToProps
), withRouter)(Dashboard);

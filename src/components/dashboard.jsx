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
    const [iniOffset, setIniOffset] = useState(0);
    const handlePage = (offset) => {
        setIniOffset(offset);
        props.storeSearch(props.searchTerm, offset, props.limit);
    }

    const isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    return (
        <div style={{ marginTop: "10px" }}>
                <div>
                    {props.updating ? <Spinner /> : null}
                    {props.error ? <div style={{ color: "red" }}>There was an error retrieving your search. Please try again...</div> : null}
                    {props.updating ? null : <h2>{props.searchTerm}</h2>}
                </div>
            <Grid container spacing={5}>
                { isEmpty(props.gifContent)? null: props.gifContentData.map((gif, index) => {
                    return (
                        <Grid style={{ cursor: "pointer" }} onClick={() => singleGif(gif)} item key={index} xs={6} md={3}>
                            <img width="100%" height="250px" src={gif.images.original.url} alt="" />
                        </Grid>
                    );
                })
                }
            </Grid>
            {isEmpty(props.gifContent)? null: props.updating ? null :
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
        gifContent: state.gifContent,
        gifContentData: state.gifContent.data,
        pagination: state.gifContent.pagination,
        searchTerm: state.searchTerm,
        updating: state.updating,
        error: state.error,
        limit: state.limit
    }
}

const MapDispatchToProps = dispatch => {
    return {
        singleGif: (gif) => dispatch(singleGif(gif)),
        storeSearch: (searchTerm, offset, limit) => {
            dispatch(storeSearch(searchTerm, offset, limit))
        }
    }
}

export default compose(connect(
    MapStateToProps,
    MapDispatchToProps
), withRouter)(Dashboard);

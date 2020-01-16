import React from 'react';
import InputBase from '@material-ui/core/InputBase';

function SearchField(props) {

    return (
        <InputBase
            inputProps={{ 'aria-label': 'search', 'data-testid': "gifsearcher"}}
            placeholder={props.placeholder}
            classes={props.classes}
            onChange={props.onChange}
            value={props.value}
            inputRef={props.inputRef}
        />
    )
}



export default SearchField;
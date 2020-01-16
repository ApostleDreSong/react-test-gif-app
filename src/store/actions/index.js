import { SEARCH, SINGLE, UPDATING, ERROR, SETLIMIT } from "../constants/action-types";
import axios from 'axios';

export const sendSearch = (gifContent, searchTerm) => {
  return { type: SEARCH, searchGif: {gifContent, searchTerm} };
}

export const singleGif = sinleGifContent => {
  return { type: SINGLE, sinleGifContent };
}

export const updating = (bool) => {
  return { type: UPDATING, bool: bool };
}

export const error = () => {
  return { type: ERROR, payload:""};
}

export const setLimit = limit => {
  return { type: SETLIMIT, limit: limit };
}

export const storeSearch = (searchTerm, offset=0, limit=2) =>  (dispatch) =>{
  dispatch(updating(true));
  //Make API call
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=QowsD5SieJdG8UlGAxisfSMQ9sk8ytrV&limit=${limit}&offset=${offset}`)
  .then(data=>{
    let gifContent = data.data;
    dispatch(sendSearch(gifContent,searchTerm));
    dispatch(updating(false));
  })
  .catch(err=>{
    console.log(err);
    dispatch(error());
    dispatch(updating(false));
  });
}


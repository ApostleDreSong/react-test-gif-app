import { SEARCH, SINGLE } from "../constants/action-types";
import axios from 'axios';

export const sendSearch = (gifContent, searchTerm) => {
  return { type: SEARCH, searchGif: {gifContent, searchTerm} };
}

export const singleGif = sinleGifContent => {
  return { type: SINGLE, sinleGifContent };
}

export const storeSearch = (searchTerm, offset=0, limit=2) =>  (dispatch) =>{
  //Make API call
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=QowsD5SieJdG8UlGAxisfSMQ9sk8ytrV&limit=${limit}&offset=${offset}`)
  .then(data=>{
    let gifContent = data.data;
    console.log(gifContent);
    dispatch(sendSearch(gifContent,searchTerm));
  })
  .catch(err=>{
    console.log(err);
  });
}


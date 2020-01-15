import { SEARCH } from "../constants/action-types";
import axios from 'axios';

export const sendSearch = gifContent => {
  return { type: SEARCH, gifContent };
}

export const storeSearch = (searchTerm, limit=2, offset=0) =>  (dispatch) =>{
  //Make API call
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=QowsD5SieJdG8UlGAxisfSMQ9sk8ytrV&limit=${limit}&offset=${offset}`)
  .then(data=>{
    let gifContent = data.data.data;
    console.log(gifContent);
    dispatch(sendSearch(gifContent));
  })
  .catch(err=>{
    console.log(err);
  });
}


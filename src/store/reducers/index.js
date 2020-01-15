import {
	SEARCH, SINGLE, UPDATING, ERROR
} from '../constants/action-types';

const searchState = {
	searchTerm: "",
	gifContent: {},
	singleGifContent: {},
	updating: false,
	error: false
};


export default function rootReducer(state = searchState, action) {
	if (action.type === SEARCH) {
		return Object.assign({},state,{
			gifContent: action.searchGif.gifContent,
			searchTerm: action.searchGif.searchTerm,
			error: false
		})
	}
	if (action.type === SINGLE) {
		return Object.assign({},state,{
			singleGifContent: action.sinleGifContent
		})
	}
	if (action.type === UPDATING) {
		return Object.assign({},state,{
			updating: action.bool
		})
	}
	if (action.type === ERROR) {
		return Object.assign({},state,{
			error: true
		})
	}
	return state;
}

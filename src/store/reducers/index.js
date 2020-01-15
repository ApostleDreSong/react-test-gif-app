import {
	SEARCH, SINGLE
} from '../constants/action-types';

const searchState = {
	searchTerm: "",
	gifContent: {},
	singleGifContent: {}
};


export default function rootReducer(state = searchState, action) {
	if (action.type === SEARCH) {
		return Object.assign({},state,{
			gifContent: action.searchGif.gifContent,
			searchTerm: action.searchGif.searchTerm
		})
	}
	if (action.type === SINGLE) {
		return Object.assign({},state,{
			singleGifContent: action.sinleGifContent
		})
	}
	return state;
}

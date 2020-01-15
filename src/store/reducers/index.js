import {
	SEARCH
} from '../constants/action-types';

const searchState = {
	gifContent: []
};


export default function rootReducer(state = searchState, action) {
	if (action.type === SEARCH) {
		return Object.assign({},state,{
			gifContent: action.gifContent
		})
	}
	return state;
}

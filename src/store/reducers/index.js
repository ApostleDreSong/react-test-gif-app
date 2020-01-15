import {
	SEARCH
} from '../constants/action-types';

const searchState = {
	searchItem: ""
};


export default function rootReducer(state = searchState, action) {
	if (action.type === SEARCH) {

	}
	return state;
}

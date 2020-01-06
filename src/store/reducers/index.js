import {
	ADD_TRANSACTION,
	CLEAR_STORE,
	RETRIEVE_TRANSACTION,
	DELETE_TRANSACTION,
	MODIFY_TRANSACTION,
	CLEAR_MODIFICATION,
} from '../constants/action-types';

const transactionList = {
	transactionsArray: [],
	modifierObject: {
		modifierArray: [],
		modifierIndex: "",
	},
	pointer : 0
};


export default function rootReducer(state = transactionList, action) {
	if (action.type === ADD_TRANSACTION) {
		let addArray = action.payload;
		addArray[0].pointer = state.pointer;
		return Object.assign({}, state, {
			transactionsArray: state.transactionsArray.concat(action.payload),
			pointer: state.pointer+1
		});
	}
	if (action.type === DELETE_TRANSACTION) {
		let arrayToDelete = [...state.transactionsArray];
    let ele = arrayToDelete.find(input => input.pointer === action.index);
    let eleIndex = arrayToDelete.indexOf(ele);
		arrayToDelete.splice(eleIndex, 1);
		return {
			...state,
			transactionsArray: arrayToDelete,
		};
	}
	if (action.type === RETRIEVE_TRANSACTION) {
    let arrayToRetrieve = [...state.transactionsArray];
    let ele = arrayToRetrieve.find(input => input.pointer === action.index);
    let eleIndex = arrayToRetrieve.indexOf(ele);
		let modifier = arrayToRetrieve.splice(eleIndex, 1);
		return {
			...state,
			modifierObject: {
				modifierArray: modifier,
				modifierIndex: eleIndex,
			},
		};
	}
	if (action.type === MODIFY_TRANSACTION) {
		//IF INDEX IS PRESENT, MODIFY AND DELETE FROM MODIFIER ARRAY
		let objectToModify = { ...state };
    let arrayToModify = [...state.transactionsArray];
    arrayToModify.splice(objectToModify.modifierObject.modifierIndex, 1, action.payload);
		return {
			...state,
			transactionsArray: arrayToModify,
			modifierObject: {
				modifierArray: transactionList.modifierObject.modifierArray,
				modifierIndex: transactionList.modifierObject.modifierIndex,
			},
		};
	}
	if (action.type === CLEAR_MODIFICATION) {
		return {
			...state,
			modifierObject: {
				modifierArray: transactionList.modifierObject.modifierArray,
				modifierIndex: transactionList.modifierObject.modifierIndex,
			},
		};
	}
	if (action.type === CLEAR_STORE) {
		state = {};
		return transactionList;
	}
	return state;
}

import { ADD_TRANSACTION, CLEAR_STORE, RETRIEVE_TRANSACTION, DELETE_TRANSACTION, MODIFY_TRANSACTION, CLEAR_MODIFICATION } from '../constants/action-types';

const transactionList = {
  transactionsArray : [],
  modifierObject : {
    modifierArray : [],
    modifierIndex : ''
  }
};

export default function rootReducer(state = transactionList, action) {
	if (action.type === ADD_TRANSACTION) {
    return Object.assign({}, state, {
      transactionsArray: state.transactionsArray.concat(action.payload)
    });
  }
  if (action.type === DELETE_TRANSACTION) {
    let arrayToDelete = [...state.transactionsArray];
    arrayToDelete.splice(action.index,1);
    return {
      ...state,
      transactionsArray : arrayToDelete
    }
  }
  if (action.type === RETRIEVE_TRANSACTION) {
    let arrayToDelete = [...state.transactionsArray];
    let modifier = arrayToDelete.splice(action.index,1);
    return {
      ...state,
      modifierObject:{
        modifierArray : modifier,
        modifierIndex : action.index
      }
    }
  }
  if (action.type === MODIFY_TRANSACTION) {
    //IF INDEX IS PRESENT, MODIFY AND DELETE FROM MODIFIER ARRAY
    let objectToModify = {...state};
    let arrayToModify = [...state.transactionsArray];
    arrayToModify.splice(objectToModify.modifierObject.modifierIndex,1,action.payload);
    return {
      ...state,
      transactionsArray : arrayToModify,
      modifierObject:{
        modifierArray : transactionList.modifierArray,
        modifierIndex : transactionList.modifierIndex
      }
    }
  }
  if (action.type === CLEAR_MODIFICATION) {
    return {
      ...state,
      modifierObject:{
        modifierArray : transactionList.modifierArray,
        modifierIndex : transactionList.modifierIndex
      }
    }
  }
  if (action.type === CLEAR_STORE) {
    state = {};
    return transactionList;
	}
	return state;
}

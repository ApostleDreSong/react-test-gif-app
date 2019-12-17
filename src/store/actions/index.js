import { ADD_TRANSACTION, CLEAR_STORE, RETRIEVE_TRANSACTION, DELETE_TRANSACTION, MODIFY_TRANSACTION, CLEAR_MODIFICATION } from "../constants/action-types";

export function addTransaction(payload) {
  return { type: ADD_TRANSACTION, payload };
}

export function clearStore() {
  return { type: CLEAR_STORE};
}

export function retrieveTransaction(index) {
  return { type: RETRIEVE_TRANSACTION, index };
}

export function deleteTransaction(index) {
  return { type: DELETE_TRANSACTION, index };
}

export function modifyTransaction(payload) {
  return { type: MODIFY_TRANSACTION, payload };
}

export function clearModification() {
  return { type: CLEAR_MODIFICATION };
}

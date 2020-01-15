import { createStore, applyMiddleware, compose  } from "redux"; 
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: storageSession
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(persistedReducer, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )); 

let persistor = persistStore(store);
 
export {
    store,
    persistor,
  };

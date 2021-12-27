import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

// import cakeReducer from './cake/cakeReducer';
// import iceCreamReducer from './iceCream/iceCreamReducer';
import rootReducer from './rootReducer';

const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(logger)));
export default store;
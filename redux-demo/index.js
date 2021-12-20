const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combinedReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE = 'BUY_ICE';

// action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIce() {
    return {
        type: BUY_ICE,
        info: 'Second redux action'
    }
}

// initial state
const initialCake = {
    numberOfCakes: 10,
}
const initialIce = {
    numberOfIceCreams: 10

}

// reducer
const reducer = (state = initialCake, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state;
    }
}

const reducer2 = (state = initialIce, action) => {
    switch (action.type) {
        case BUY_ICE: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }
        default: return state;
    }
}

const rootReducer = combinedReducers({
    cake: reducer,
    ice: reducer2
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());
const sub = store.subscribe(() => {})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIce());
store.dispatch(buyIce());
store.dispatch(buyIce());
sub();
const redux = require('redux');
const createStore = redux.legacy_createStore
const bindActionCreatores = redux.bindActionCreators
const combineReducers = redux.combineReducers
const produce = require('immer').produce
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// Hold app state
// Allow access to state via getState()
// Allow state update via dispatchEvent(action)
// Registers listeners via subscribe(listener)
// Handles unregistering via the function returned by subscribe(listener)

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIceCream() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1,
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 10,
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            // return {
            //     ...state,
            //     numOfCakes: state.numOfCakes - 1,
            // }
            return produce(state, (draft) => {
                draft.numOfCakes--
            })
        case CAKE_RESTOCKED:
            // return {
            //     ...state,
            //     numOfCakes: state.numOfCakes + action.payload
            // }
            return produce(state, (draft) => {
                draft.numOfCakes += action.payload
            })
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            }
            break;
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//  Both the reducers gets the same actions, One acts on it and other doesn't.

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {});
// const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake());
// store.dispatch(restockCake(5));
const actions = bindActionCreatores({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch);
actions.orderCake()
actions.orderCake()
actions.restockCake(10)
actions.orderCake()
actions.orderIceCream()
actions.restockIceCream(10)
unsubscribe();
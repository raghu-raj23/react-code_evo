const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const { iceCreamActions } = require('./features/icecream/iceCreamSlice');

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
});

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(3))
unsubscribe()
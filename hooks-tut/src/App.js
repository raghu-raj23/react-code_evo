import './App.css';
import React, { useReducer } from 'react';

import L1_Counter from './components/L1_Counter';
import L2_CounterWithFunc from './components/L2_CounterWithFunc';
import L3_CounterWithSpread from './components/L3_CounterWithSpread';
import L4_CounterWithArray from './components/L4_CounterWithArray';
import L5_CounterWithEffect from './components/L5_CounterWithEffect';
import L6_HookMouse from './components/L6_HookMouse';
import L7_MouseContainer from './components/L7_MouseContainer';
import L8_IntervalHookCounter from './components/L8_IntervalHookCounter';
import L9_DataFetchingAxios from './components/L9_DataFetchingAxios';
import L10_ContextCompC from './components/L10_ContextCompC';
import L11_ReducerCounterOne from './components/L11_ReducerCounterOne';
import L12_ReducerCounterTwo from './components/L12_ReducerCounterTwo';
import L13_ReducerCounterThree from './components/L13_ReducerCounterThree';
import L14_RedConCompA from './components/L14_RedConCompA';


const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':  
            return initialState;
        default:
            return state;
    }
}

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext()

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value ={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        <L1_Counter />
        <L2_CounterWithFunc />
        <L3_CounterWithSpread />
        <L4_CounterWithArray />
        <L5_CounterWithEffect />
        <L6_HookMouse />
        <L7_MouseContainer />
        <L8_IntervalHookCounter />
        <L9_DataFetchingAxios />

        <UserContext.Provider value={'Raghuraj'}>
          <ChannelContext.Provider value={'Learning Hooks'}>
            <L10_ContextCompC />
          </ChannelContext.Provider>
        </UserContext.Provider>
        
        <L11_ReducerCounterOne />
        <L12_ReducerCounterTwo />
        <L13_ReducerCounterThree />

        Count - {count}
        <L14_RedConCompA />
      </div>
    </CountContext.Provider>
  );
}

export default App;

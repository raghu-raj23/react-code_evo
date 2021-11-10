import './App.css';
import L1_Counter from './components/L1_Counter';
import L2_CounterWithFunc from './components/L2_CounterWithFunc';
import L3_CounterWithSpread from './components/L3_CounterWithSpread';
import L4_CounterWithArray from './components/L4_CounterWithArray';
import L5_CounterWithEffect from './components/L5_CounterWithEffect';
import L6_HookMouse from './components/L6_HookMouse';
import L7_MouseContainer from './components/L7_MouseContainer';
import L8_IntervalHookCounter from './components/L8_IntervalHookCounter';
import L9_DataFetchingAxios from './components/L9_DataFetchingAxios';
function App() {
  return (
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
    </div>
  );
}

export default App;

import './App.css';
import L1_counter from './components/L1_counter';
import L2_counterWithFunc from './components/L2_counterWithFunc';
import L3_counterWithSpread from './components/L3_counterWithSpread';
import L4_counterWithArray from './components/L4_counterWithArray';
function App() {
  return (
    <div className="App">
      <L1_counter />
      <L2_counterWithFunc />
      <L3_counterWithSpread />
      <L4_counterWithArray />
    </div>
  );
}

export default App;

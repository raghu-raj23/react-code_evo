// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome.js'
import Message from './components/Message.js'
import Counter from './components/Counter.js'
import FuncClick from './components/FuncClick.js'
import ClassClic from './components/classClick.js'
import EvenBind from "./components/EventBind.js";
import ParentComp from './components/ParentComp'
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <Greet name = "naruto" >
        <p>children props</p>
      </Greet>

      <Greet name = "sasuke" >
        <button>Hello</button>
      </Greet>

      <Welcome name = "naruto"/>

      <Message/>

      <Counter />

      <FuncClick />

      <ClassClic />

      <EvenBind />

      <ParentComp />

      <UserGreet />

      <NameList />

    </div>
  );
}

export default App;

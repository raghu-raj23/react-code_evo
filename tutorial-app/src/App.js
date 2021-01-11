// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome.js'
import Message from './components/Message.js'
import Counter from './components/Counter.js'
import FuncClick from './components/FuncClick.js'
import ClassClic from './components/classClick.js'
import EvenBind from "./components/EventBind.js"
import ParentComp from './components/ParentComp'
import UserGreet from './components/UserGreet'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

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

      <Stylesheet primary = {true}/>

      <Inline />
      
      <h1 className = 'error'> ERROR</h1>

      <h1 className = {styles.success}>Success</h1>


    </div>
  );
}

export default App;

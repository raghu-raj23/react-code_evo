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
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp_p from './components/ParentComp_p';

function App() {
  return (
    <div className="App">
      {/* <h3>This corresponds to React Fragments</h3>
      <Greet name = "naruto" >
        <p>children props</p>
      </Greet>

      <Greet name = "sasuke" >
        <button>Hello</button>
      </Greet>
      <h3>This corresponds to React Fragments</h3>
      <Welcome name = "naruto"/>
      <h3>This corresponds to React Fragments</h3>
      <Message/>
      <h3>This corresponds to React Fragments</h3>
      <Counter />
      <h3>This corresponds to React Fragments</h3>
      <FuncClick /> 
      <h3>This corresponds to React Fragments</h3>
      <ClassClic />
      <h3>This corresponds to React Fragments</h3>
      <EvenBind />
      <h3>This corresponds to React Fragments</h3>
      <ParentComp />
      <h3>This corresponds to React Fragments</h3>
      <UserGreet />
      <h3>This corresponds to React Fragments</h3>
      <NameList /> */}

      {/* 20. Styling with CSS */}
      {/* <h3>This corresponds to React styling</h3>
      <Stylesheet primary = {true}/>
      <Inline />      
      <h1 className = 'error'> ERROR</h1>
      <h1 className = {styles.success}>Success</h1> */}

      {/* 21. Form handling */}
      {/* <h3>This corresponds to React Form handling</h3>
      <Form />

      <h3>This corresponds to React Lifecycle methods</h3>

      <LifeCycleA />

      <h3>This corresponds to React Fragments</h3>

      <FragmentDemo />
      <Table> 

      </Table>
      <h3>This corresponds to React Pure Components</h3>

      <PureComp>
        
      </PureComp> */}

      <ParentComp_p>

      </ParentComp_p>

    </div>
  );
}

export default App;

import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome.js";
import Message from "./components/Message.js";
import Counter from "./components/Counter.js";
import FuncClick from "./components/FuncClick.js";
import ClassClic from "./components/ClassClick.js";
import EvenBind from "./components/EventBind.js";
import ParentComp from "./components/ParentComp";
import UserGreet from "./components/UserGreet";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp_p from "./components/ParentComp_p";
import RefsDemo from "./components/RefsDemo";
import ClassRefs from "./components/ClassRefs";
import ClassRefsParent from "./components/ClassRefsParent";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <h3>This corresponds to React funtional components, props,Destructuring props and state</h3>
      <Greet name="naruto">
        <p>children props</p>
      </Greet>
      <Greet name="sasuke">
        <button>Hello</button>
      </Greet>
      <h3>This corresponds to React Class components, props</h3>
      <Welcome name="naruto" />
      <h3>This corresponds to React Component State</h3>
      <Message />
      <h3>This corresponds to React Component State and setState</h3>
      <Counter />
      <h3>This corresponds to eventHandling in functional components</h3>
      <FuncClick />
      <h3>This corresponds to eventHandling in class components</h3>
      <ClassClic />
      <h3>This corresponds to Bind eventHandlers to React components</h3>
      <EvenBind />
      <h3>This corresponds to Method as props</h3>
      <ParentComp />
      <h3>This corresponds to Conditional Rendering</h3>
      <UserGreet />
      <h3>This corresponds to React List rendering, list as keys, index as key anti-pattern</h3>
      <NameList />

      {/* 20. Styling with CSS */}
      <h3>This corresponds to React styling</h3>
      <Stylesheet primary={true} />
      <Inline />
      <h1 className="error"> ERROR</h1>
      <h1 className={styles.success}>Success</h1>

      {/* 21. Form handling */}
      <h3>This corresponds to React Form handling</h3>
      <Form />

      <h3>This corresponds to React Lifecycle methods</h3>

      <LifeCycleA />

      <h3>This corresponds to React Fragments</h3>

      <FragmentDemo />
      <Table></Table>
      <h3>This corresponds to React Pure Components, Memo Components</h3>

      <PureComp></PureComp>

      <ParentComp_p />

      <h3>This corresponds to React Refs</h3>
      <RefsDemo />

      <h3>This corresponds to React class Refs</h3>
      
      <ClassRefsParent />

      <h3>This corresponds to forwarding React Refs</h3>

      <FRParentInput/>
      <h3>This corresponds to forwarding React Portals</h3>

      <PortalDemo/>

      <h3>This corresponds to forwarding React Error Boundaries</h3>

      <ErrorBoundary>
      <Hero heroName ="Batman" />
      </ErrorBoundary>
      {/* <ErrorBoundary>
      <Hero heroName ="Jocker"/>
      </ErrorBoundary> */}

      <h3>This corresponds to React Higher Order Components</h3>

      <ClickCounter/>
      <HoverCounter/>
      <h3>This corresponds to render props</h3>
      <User render = {(isLoggedIn) => isLoggedIn ? "raghu" : "Guest" }/>
      <h3>This corresponds to Context API</h3>
      <UserProvider value = "Raghu">
        <ComponentC />
      </UserProvider>
      <h3>This corresponds to HTTP request with class</h3>
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import {Provider} from "react-redux"
import store from "./app/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Provider uses react context API so provide the store at the top of the DOM */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

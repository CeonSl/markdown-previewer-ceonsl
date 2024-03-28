import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/js/store.js";
import "./scss/Editor.scss";
import "./scss/Previewer.scss";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

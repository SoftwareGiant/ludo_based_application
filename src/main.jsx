import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      position="top-left"
      style={{
        maxWidth: "480px",
        width: "100%",
        padding: "0px",
        margin: "0px",
        top: "0",
        left: "0",
      }}
    />
  </React.StrictMode>
);

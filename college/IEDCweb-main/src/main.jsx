// index.js

import React from "react";
import ReactDOM from "react-dom/client";
//import MenuToggle from "./components/MenuToggle";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // Enable routing in the app

// Render the App component inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

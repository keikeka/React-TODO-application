//Import REACT
import React from "react";
import ReactDOM from "react-dom";

//Import BOOTSTRAP
import "bootstrap";

//Styles
import "../styles/index.scss";
import "../styles/InputList.scss";

//Components
import Inputlist from "./component/InputList.jsx";
import Items from "./component/Items.jsx";

//Render the react application
ReactDOM.render(<Inputlist />, document.querySelector("#app"));

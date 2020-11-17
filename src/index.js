import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import {Test} from "./Test/fnx"


class App extends Component {
  render() {
    return <Test value={"Fun"}></Test>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





// import {Test} from "./Test/fnx"
// import React, { Component } from "react";


// class App extends Component {
//   render() {
//     return <Test value={"xinelagem"}></Test>
//   }
// }
// export default App;
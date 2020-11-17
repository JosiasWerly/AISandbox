import React from 'react';

import SampleMessage from "./ReactSamples/SampleMessage"
import Timer from "./ReactSamples/SampleTimer"
import './App.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

function App() {
  return (
    <div>
      <SampleMessage messssage="Joe"/>
      <Timer/>
      <Square/>
    </div>
  );
}

export default App;

// <div>
//   <SampleMessage messssage="Joe"/>
//   <SampleMessage messssage={<Timer/>}/>
//   {/* //<Timer></Timer> */}
// </div>

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <SampleMessage className="Joey"/>
//     </a>
//   </header>
// </div>
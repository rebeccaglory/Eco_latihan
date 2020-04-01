import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap'
import { Route } from 'react-router-dom';
import Home from './pages/home';
import  Navbar  from "./component/Navbar";
import Login from "./pages/login";

class App extends Component {
  state = {  }
  
  render() { 
    return ( 
      <div>
        <Navbar/>
        <Route path = "/" component = {Home} exact/>
        <Route path = '/login' component={Login}/>
      </div>
     );
  }
}
 
export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



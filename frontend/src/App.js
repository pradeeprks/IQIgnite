// import logo from "./logo.svg";
import "./styles/App.css";
import Navbar from './pages/Navbar'
import Login from "./pages/login"
function App() {
  return (

  
    <div className="App">
      <Login />
      <Navbar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Team Edit TEST <code>src/App.js</code> and save
          to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

import logo from '../logo.svg';
import './App.css';
import Form from "../Form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form initialText='Form 1 text'/>
      <Form initialText='Form 2 text'/>
    </div>
  );
}

export default App;

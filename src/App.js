import logo from './logo.svg';
import './App.css';
import Animal from "./Components/Animal"

function App() {
  // const lion = new AnimalComponent({ name: 'Leo', species: 'Lion' });
  const giraffe = new Animal({height: '400miles'});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Animal height='400miles'/>
    </div>
  );
}

export default App;

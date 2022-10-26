import logo from './logo.svg';
import './App.css';
import SomeClassComponent from './components/SomeClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is fresh ❤
        </p>

      <SomeClassComponent/>
      </header>
    </div>
  );
}

export default App;

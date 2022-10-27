import logo from './logo.svg';
import './App.css';
import PersonCardFunc from './components/PersonCardFunc';
function App() {

  return (
    <div className="App">
      <PersonCardFunc firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCardFunc firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCardFunc firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCardFunc firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Green"}/>
    </div>

    
  );

  }
export default App;

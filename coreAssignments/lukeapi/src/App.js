import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';
import { ErrorPage } from './components/ErrorPage';

function App() {
  return (
    <div>
      <h1>Please  Please  Please work.</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/planet/:id" element={<Planet />} />
        {/* wildcard */}
        <Route path="*" element={<ErrorPage/>} />
        

      </Routes>
    </div>
  );
}

export default App;
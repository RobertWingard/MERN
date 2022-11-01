import { useState } from 'react'
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])


  const fetchPokemon = () => {
    console.log("test")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((actual) => {
        console.log(actual)
        //this has to be on the same level to be able to mapped over.
        setPokemon(actual.results)
      })
      .catch((err) => {
        console.log("Error", err)
      })
  }
  return (
    <div className="App">
      <h1>Pokemon</h1>

      <button onClick={fetchPokemon}>Gotta catchEmAll</button>

      <table>
        <thead>
          <tr>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {/* this was not a function until I got to the level */}
          {pokemon.map((poke, index) => {
              return (
                <tr>
                  
                  <td>{poke.name}</td>
                </tr>
              )
            })
          }

        </tbody>

      </table>




    </div>

  );
}

export default App;

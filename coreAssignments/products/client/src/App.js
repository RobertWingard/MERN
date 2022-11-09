import './App.css';
import {Link, Routes, Route, Navigate} from "react-router-dom"
import Main from './components/Main';
import { useState } from 'react'
import axios from "axios"
import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")

  const createProduct = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:8000/api/products", {title, price, description})
    .then(res => {
      console.log("good to go")
      console.log(res.data)
    })
    .catch(err => {
      console.log("no good")
      console.log(err)
    })
  }

  return (
    <div className="App">
      <h1>Product Manager 🚲🚲</h1>
    {/* this is where ill do form */}
      <div>
        check this: 
        {JSON.stringify(title)}
        {JSON.stringify(price)}
        {JSON.stringify(description)}
    <form onSubmit={createProduct}>
    title: <input onChange={e => setTitle(e.target.value)} value={title}/> <br />
    price: <input onChange={e => setPrice(e.target.value)} value={price} type="number" /> <br />
    description: <input onChange={e => setDescription(e.target.value)} value={description}/> <br />
    <button> Create </button>

    </form>

      </div>
      
      <hr/>
      <Routes>
        <Route path="/products/" element={<Main/>} />

        <Route path="/products/:id" element={<ViewOne/>} />

        <Route path="/products/:id/edit" element={<Update/>} />

        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>

    </div>
  );
}

export default App;

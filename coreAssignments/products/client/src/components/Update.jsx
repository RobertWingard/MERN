import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"


const Update = (props) => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/products/"+ id, { title, price, description })
            .then(res => {
                console.log("good to go")
                console.log(res.data)
                navigate("/main")

            })
            .catch(err => {
                console.log("no good")
                console.log(err)
            })
    }

    return (
        <div>
            check this:
            {JSON.stringify(title)}
            {JSON.stringify(price)}
            {JSON.stringify(description)}
            <form onSubmit={updateProduct}>
                title: <input onChange={e => setTitle(e.target.value)} value={title} /> <br />
                price: <input onChange={e => setPrice(e.target.value)} value={price} type="number" /> <br />
                description: <input onChange={e => setDescription(e.target.value)} value={description} /> <br />
                <button> Update </button>

            </form>

        </div>
    )
}

export default Update
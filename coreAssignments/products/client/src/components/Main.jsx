import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"


const Main = (props) => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (

        <>
        <div>All Products:
            
            {
            products.map((oneProduct) => {
                return(
                    <div key={oneProduct._id}>
                        <Link to={`/products/${oneProduct._id}`}>
                        <h5>{oneProduct.title}</h5>
                        </Link>
                    </div>
                )
            })

            }</div>
        </>
    )
}

export default Main
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Update from './Update'

const ViewOne = () => {
    const { id } = useParams()
    const [thisProduct, setThisProduct] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setThisProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    //go to the update place
    const goToUpdate = (edit) => {
        navigate("/products/" + edit + "/edit" )
    }

    const deleteProduct = (deleteID) => {
        axios.delete("http://localhost:8000/api/products/" + deleteID)
        .then(res => {
            console.log("gone", res.data)
            navigate("/Main")
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            {
            thisProduct ? (
                <div>
                    <h5>{thisProduct.title} </h5><br />
                    price:{thisProduct.price} <br />
                    description: {thisProduct.description} <br />
                </div>
            ) : "still thinking" 
            }
            <button onClick={() => deleteProduct(thisProduct._id)} >Delete</button>
            <button onClick={() => goToUpdate(thisProduct._id) }>Edit</button>
        </div>
        
            )
}

export default ViewOne
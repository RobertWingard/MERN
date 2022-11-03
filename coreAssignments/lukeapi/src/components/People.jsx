import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function People(props) {

    const [person, setPerson] = useState('');
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            // .then(response => console.log(response.data))
            .then(response => setPerson(response.data))
            .catch(err => console.log(err));

    }, [id]);

    return (
        <div>
            <h2>Name: {person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Eye Color: {person.eye_color}</p>
        </div>
    )
}

export default People
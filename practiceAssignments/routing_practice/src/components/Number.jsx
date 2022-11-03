import React from 'react'
import { useParams } from 'react-router-dom'

export const Number = (props) => {


const { option } = useParams();

const check = () => {
    if(isNaN(option)) {
        return <div>
            Your word is {option}
        </div>
    }else{
        return <div>
            Your number is {option}
        </div>
    }


}

return (check())
}

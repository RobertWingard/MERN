import React from 'react'

const PersonCardFunc = (props) => {

return (
    
    <div>
    <p> Name: {props.firstName} {props.lastName}</p>
        
      <p>Age: {props.age}</p>  
      <p>Hair Color: {props.hairColor}</p>  
    </div>
    
    
)

}

export default PersonCardFunc
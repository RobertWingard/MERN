import React from "react";

class PersonCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    update = () => {
        let age = this.state.age + 1;
        this.setState({age: age});
    }


    render(){
        return (
            <>
            <div>
            <h1>{this.props.lastName}, {this.props.firstName} </h1> 
            <h3>Age: {this.state.age}</h3> 
            <h3>Hair Color: {this.props.hairColor}</h3> 
            </div>

            <button className="btn btn-secondary" onClick={this.update}> Increase { this.props.firstName } { this.props.lastName } </button>
        </>
        )
    }
}

export default PersonCard;
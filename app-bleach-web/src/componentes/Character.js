import React from "react";

export default class Character extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>
                <h3>Personaje</h3>
                <img className='img' src={this.props.url}></img>
                <div>{this.props.name}</div>
            </div>
        )
    }
}
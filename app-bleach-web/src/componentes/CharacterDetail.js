import React from "react";
import Data from "./../data/data.json";

export default class CharacterDetail extends React.Component{
    constructor(props){
        super()
        this.state = {
            detalles : Data.Characters[0]
        };
    }
//Creo que es mejor usar un Hook de useState es mejor ver documentacion
    change(event){
        Data.Characters.map((element)=> {
            //console.log(element)
            if(element.name===event.target.value){
                //console.log(element.name)
                this.setState(()=>{
                    return {detalles: element}
                })
            }
        })
    }
    render(){
        return(
            <div>
                <select onChange={(event)=>{this.change(event)}}> 
                    {Data.Characters.map((element) =>(
                        <option value={element.name}>{element.name}</option>
                    ))}
                </select>
                <h3>{this.state.detalles.name}</h3>
                <img className='img' src={this.state.detalles.photo}></img>
                <div>{"edad: "+ this.state.detalles.age}</div>
                <div>{"ciudad: "+ this.state.detalles.City}</div>
            </div>
        )
    }
}
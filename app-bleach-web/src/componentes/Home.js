import React from 'react';
import Character from "./Character";
import Data from "./../data/data.json";

export default class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <>
            {Data.Characters.map((element) => (
                <Character
                    name={element.name + " " + element.lastname}
                    url={element.photo}
                />
            ))}                
            </>
        )
    }
}
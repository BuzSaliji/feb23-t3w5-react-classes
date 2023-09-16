import React from "react";

// Extend from Component to make sure that this works as a React Component
export default class PokemonDisplay extends React.Component{
	constructor(props){
		super(props);

		// State stores data per component
		this.state = {
			pokemonName: null
		}
	}
    render(){
        return(
            <div>
                <h1>Some contenet here</h1>
            </div>
        )
    }
    
}


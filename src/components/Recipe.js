
import React from 'react'


const Recipe = props => {

    return (
        <div>
            <h1>{props.recipe.label}</h1>
            <p>{props.recipe.calories}</p>
            <ol>
                {props.recipe.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={props.recipe.image} alt="" />

        </div>
    )
}

export default Recipe
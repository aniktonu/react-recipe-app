
import React from 'react';
import style from './recipe.module.css';



const Recipe = props => {

    return (
        <div>
            <h1 className={style.recipe}>{props.recipe.label}</h1>
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

export default Recipe;
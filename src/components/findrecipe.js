import React from "react";
import recipes from "./recipes";
import { useParams } from "react-router-dom";
const FindRecipe = () => {
    const { name } = useParams();
    const recipe = recipes.find((recipe) => recipe.name === name);

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <div>
            <h2>{recipe.name}</h2>
            <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>Instructions:</p>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
    )
}


export default FindRecipe;
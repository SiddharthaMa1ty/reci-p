import React from "react";
import recipes from "../components/recipes";
import { Link } from "react-router-dom";

const Recipe = () => {
    const fiveRecipes = recipes.slice(0, 9);

    return (
        <div>
      <h2>Featured Recipes</h2>
      <div className="row">
        {fiveRecipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.description}</p>
                <Link to={`/recipe/${recipe.name}`} className="btn btn-primary">View Recipe</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Recipe;
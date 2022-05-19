import React from "react";
import RecipesAll from "./recipeseach";

function RecipesMain(){

    return(
        <div className="recipes">
            <RecipesAll name="Name 1" about="about recipe1"/>
            <RecipesAll name="Name 2" about="about recipe2"/>
            <RecipesAll name="Name 3" about="about recipe3"/>
            <RecipesAll name="Name 4" about="about recipe4"/>
            <a href = "">See all Recipes</a>
        </div>
    );
}

export default RecipesMain;


import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({handleWantCook}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className=" col-span-5">
            <div className=" grid grid-cols-2 gap-y-5">
                {
                    recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} handleWantCook={handleWantCook}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;
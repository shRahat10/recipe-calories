import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({ handleWantCook }) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className=" grid lg:grid-cols-2 gap-5">
            {
                recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} handleWantCook={handleWantCook}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleWantCook: PropTypes.func,
};

export default Recipes;
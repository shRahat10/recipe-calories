import PropTypes from 'prop-types';

const Recipe = ({ recipe, handleWantCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className=" w-full h-[684px] p-6 space-y-4 border rounded-xl">
            <img className=" h-40 w-full rounded-xl" src={recipe_image} alt="recipe image loading" />
            <h1 className=" h-12 font-bold">{recipe_name}</h1>
            <p className=" h-20">{short_description}</p>
            <hr />
            <p className=" font-bold">Ingredients: {ingredients.length}</p>
            <div className=" pl-10">
                {
                    ingredients.map((ingredient, idx) =>
                        <ul className="list-disc" key={idx}>
                            <li>{ingredient}</li>
                        </ul>
                    )
                }
            </div>
            <hr />
            <div className=" flex items-center gap-6">
                <div className=" flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                    </svg>
                    {preparing_time} minutes
                </div>
                <div className=" flex items-center gap-2">
                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs />
                        <path id="Vector" d="M5 0C5 3.03 3.22 4.74 2 6C0.77 7.25 0 9.24 0 11C0 12.59 0.63 14.11 1.75 15.24C2.88 16.36 4.4 17 6 17C7.59 17 9.11 16.36 10.24 15.24C11.36 14.11 12 12.59 12 11C12 9.46 10.94 7.06 10 6C8.21 9 7.2 9 6 8C8 5.04 6 1 5 0Z" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                    {calories} calories
                </div>
            </div>
            <button onClick={()=>handleWantCook(recipe)} className=" w-44 h-14 bg-[#0BE58A] text-black font-bold rounded-[50px]">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleWantCook: PropTypes.func,
}

export default Recipe;
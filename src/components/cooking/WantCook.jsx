const WantCook = ({ wantCook, handleCurrentlyCooking }) => {
    
    return (
        <div>
            <h1>Want to cook: {wantCook.length}</h1>
            <table className=" table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wantCook.map((recipe, idx) =>
                            <tr className=" bg-slate-100 " key={idx}>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                                <td>
                                    <button onClick={() => handleCurrentlyCooking(recipe, recipe.recipe_id)} className=" w-28 h-9 bg-[#0BE58A] text-black font-bold rounded-[50px]">Preparing</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default WantCook;
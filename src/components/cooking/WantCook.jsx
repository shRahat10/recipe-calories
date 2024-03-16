const WantCook = ({ wantCook, handleCurrentlyCooking }) => {

    return (
        <div className=" space-y-5 mt-10">
            <h1 className=" text-2xl text-center font-bold">Want to cook: {wantCook.length}</h1>
            <hr/>
            <table className=' w-full'>
                <tr className=" py-4">
                    <th className=" w-3"></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                </tr>
                {
                    wantCook.map((recipe, idx) =>
                        <tr className=" bg-slate-100 border-b-2 border-gray-300 " key={idx}>
                            <td>{idx + 1}</td>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time} minutes</td>
                            <td>{recipe.calories} calories</td>
                            <td>
                                <button onClick={() => handleCurrentlyCooking(recipe, recipe.recipe_id)} className=" w-28 h-9 bg-[#0BE58A] text-black font-bold rounded-[30px]">Preparing</button>
                            </td>
                        </tr>
                    )
                }
            </table>
        </div >
    );
};

export default WantCook;
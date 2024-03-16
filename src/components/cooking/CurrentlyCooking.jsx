const CurrentlyCooking = ({ currentlyCooking, totalTime, totalCalories }) => {

    return (
        <div className=" space-y-5 mt-10">
            <h1 className=" text-2xl text-center font-bold">Want to cook: {currentlyCooking.length}</h1>
            <hr />
            <table className=' w-full'>
                <tr className=" py-4">
                    <th className=" w-3"></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                {
                    currentlyCooking.map((recipe, idx) =>
                        <tr className=" bg-slate-100 border-b-2 border-gray-300 " key={idx}>
                            <td>{idx + 1}</td>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time} minutes</td>
                            <td>{recipe.calories} calories</td>
                        </tr>
                    )
                }
                <tr className=" font-bold">
                    <td></td>
                    <td></td>
                    <td>Total Time:</td>
                    <td>Total Calories:</td>
                </tr>
                <tr className=" font-bold">
                    <td></td>
                    <td></td>
                    <td>{totalTime} minutes</td>
                    <td>{totalCalories} calories</td>
                </tr>
            </table>
        </div >
    );
};

export default CurrentlyCooking;
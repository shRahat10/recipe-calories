import PropTypes from 'prop-types';

const WantCook = ({ wantCook, handleCurrentlyCooking }) => {

    return (
        <div className=" space-y-5 mt-10">
            <h1 className=" text-2xl text-center font-bold">Want to cook: {wantCook.length}</h1>
            <hr />
            <table className=' w-full'>
                <tr className=" py-4 font-bold">
                    <td className=" w-3"></td>
                    <td>Name</td>
                    <td>Time</td>
                    <td>Calories</td>
                    <td></td>
                </tr>
                {
                    wantCook.map((recipe, idx) =>
                        <tr className=" bg-slate-100 border-b-2 border-gray-300 " key={idx}>
                            <td>{idx + 1}</td>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time} minutes</td>
                            <td>{recipe.calories} calories</td>
                            <td>
                                <button onClick={() => handleCurrentlyCooking(recipe, recipe.recipe_id)} className=" xl:px-4 w-9 xl:w-fit h-9 bg-[#0BE58A] text-black font-bold rounded-full lg:rounded-2xl flex justify-center items-center">
                                    <p className=" hidden xl:flex">Preparing</p>
                                    <img className=" flex xl:hidden" src="../../../public/images/Cooking.png" alt="" />
                                </button>
                            </td>
                        </tr>
                    )
                }
            </table>
        </div >
    );
};

WantCook.propTypes = {
    wantCook: PropTypes.object,
    handleCurrentlyCooking: PropTypes.func
}

export default WantCook;
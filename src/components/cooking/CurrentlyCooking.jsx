const CurrentlyCooking = ({ currentlyCooking, totalTime, totalCalories }) => {
    
    return (
        <div>
            <h1>Currently cooking: {currentlyCooking.length}</h1>
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
                        currentlyCooking.map((cooking, idx) =>
                            <tr className=" bg-slate-100 " key={idx}>
                                <td>{cooking.recipe_name}</td>
                                <td>{cooking.preparing_time} minutes</td>
                                <td>{cooking.calories} calories</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>Total Time = </td>
                        <td>Total Calories = </td>
                    </tr>
                    <tr>
                        <td>{totalTime} minutes</td>
                        <td>{totalCalories} calories</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrentlyCooking;
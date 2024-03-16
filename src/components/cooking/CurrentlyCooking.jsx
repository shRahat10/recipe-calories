const CurrentlyCooking = ({ currentlyCooking }) => {
    
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
                                <td>{cooking.preparing_time}</td>
                                <td>{cooking.calories}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CurrentlyCooking;
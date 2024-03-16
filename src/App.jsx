import './App.css'
import Header from './components/header/Header'
import Recipes from './components/recipe/Recipes'
import WantCook from './components/cooking/WantCook'
import CurrentlyCooking from './components/cooking/CurrentlyCooking'
import { useState } from 'react'

function App() {

  let flag = true;

  const [wantCook, setWantCook] = useState([]);

  const handleWantCook = (recipe) => {
    for (const element of wantCook) {
      if (recipe === element) {
        flag = false;
      }
    }
    if (flag === true) {
      const newWantCook = [...wantCook, recipe];
      setWantCook(newWantCook);
    }
    else {
      // toast throw korte hbe
    }
    flag = true
  }

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleCurrentlyCooking = (recipe, recipe_id) => {
    const newCurrentlyCooking = [...currentlyCooking, recipe]
    setCurrentlyCooking(newCurrentlyCooking)

    const remainingWantCook = wantCook.filter(filterWantCook => filterWantCook.recipe_id !== recipe_id);
    setWantCook(remainingWantCook);

    const newTotalTime = totalTime + recipe.preparing_time
    setTotalTime(newTotalTime)
    const newTotalCalories = totalCalories + recipe.calories
    setTotalCalories(newTotalCalories)

  }

  return (
    <div className='lexend max-w-[1440px] mx-3 lg:mx-20 mb-20 space-y-20'>
      <Header></Header>
      <div className=" text-center space-y-4">
        <h1 className=" text-4xl font-semibold">Our Recipes</h1>
        <p>Indulge in our diverse array of meticulously crafted recipes, each designed to inspire and delight your palate.</p>
      </div>
      <div className=' flex flex-col justify-center items-center xl:items-start gap-5 xl:grid grid-cols-8'>
        <div className=" col-span-5">
          <Recipes handleWantCook={handleWantCook}></Recipes>
        </div>
        <div className=" w-full col-span-3 border rounded-xl">
          <WantCook wantCook={wantCook} handleCurrentlyCooking={handleCurrentlyCooking}></WantCook>
          <CurrentlyCooking currentlyCooking={currentlyCooking} totalTime={totalTime} totalCalories={totalCalories}></CurrentlyCooking>
        </div>
      </div>
    </div>
  )
}

export default App

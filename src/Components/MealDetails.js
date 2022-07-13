import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MealDetails = () => {
    const {mealId} = useParams();

    const [mealDetails, setMealDetails] = useState ({});

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMealDetails(data))
    },[])
  return (

    <section className=''>

        <h1 className='text-center py-6 text-2xl '>MealID: <span className='text-blue-500 font-bold'>{mealId}</span></h1>

        <h1>{mealDetails.strMeal}</h1>
    </section>
  )
}

export default MealDetails
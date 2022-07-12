import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MealDetails = () => {
    const {mealId} = useParams()

    const [mealDetails, setMealDetails] = useState ({})

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMealDetails(data.meals))
    },[mealDetails])
  return (

    <section className='w-full px-6'>
        <h1>hello: {mealId}</h1>

        <img src={mealDetails.strMealThumb} alt="" />
        <h1>{mealDetails.strMeal}</h1>
        <h1>{mealDetails.strCategory}</h1>
        <h1>{mealDetails.strArea}</h1>
        <h1>{mealDetails.strInstructions}</h1>
        <h1>{mealDetails.strTags}</h1>
    </section>
  )
}

export default MealDetails
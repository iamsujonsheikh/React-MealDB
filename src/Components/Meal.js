import React from 'react'
import { Link} from "react-router-dom";


const Meal = ({meal}) => {
    console.log(meal)
    const {strMeal,strMealThumb,idMeal} = meal;
  return (
    <section className='border rounded text-center duration-300 hover:shadow-lg'>
        <img className='rounded' src={strMealThumb} alt="" />
        <Link className='text-blue-500 hover:underline' to={`/meal/${idMeal}`} >{strMeal}</Link>
    </section>
  )
}

export default Meal
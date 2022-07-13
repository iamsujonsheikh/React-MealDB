import React from 'react'
import { useNavigate} from "react-router-dom";


const Meal = ({meal}) => {
    console.log(meal)
    const {strMeal,strMealThumb,idMeal} = meal;

    const navigate = useNavigate();

    const handleBtn = () =>{
      navigate(`/meal/${idMeal}`)
    }

  return (
    <section className='border rounded text-center duration-300 hover:shadow-lg'>
        <img className='rounded' src={strMealThumb} alt="" />

        <button onClick={handleBtn} className='border rounded px-2 my-1 bg-blue-100' >{strMeal}</button>
    </section>
  )
}

export default Meal
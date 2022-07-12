import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Typed from 'react-typed';
import Meal from './Meal';


const Meals = () => {
  const [searchText, setSearchText] = useState ('');
  const [meals, setMeals] = useState ([])

  const handleSrcInput = e => {
    const result = e.target.value;
    setSearchText(result)
  }

  useEffect(()=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => setMeals(data.meals))
  },[meals])

  return (
    <section className='w-full h-full px-4'>

        <div className='w-60 mx-auto flex justify-between px-2 py-1 items-center border border-purple-400 rounded-md my-10'>


                <Typed
                strings={['Search you want']}
                    typeSpeed={80}
                    backSpeed={80}
                    attr="placeholder"
                    loop >
                    <input onChange={handleSrcInput} className='outline-none' type="text"/>
                </Typed>


           <AiOutlineSearch size={20} className='  cursor-pointer bg-slate-200 rounded p-1 text-slate-500'/>
         
        </div>

        <h1 className='text-center text-red-400 text-xl'>Total meals:{meals.length}</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 py-4'>
          {
            meals.map(meal => <Meal
            key={meal.idMeal}
            meal={meal}
            ></Meal>)
          }
        </div>

        
    </section>
  )
}

export default Meals
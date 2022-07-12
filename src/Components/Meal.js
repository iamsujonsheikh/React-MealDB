import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Typed from 'react-typed';


const Meal = () => {
  const [searchText, setSearchText] = useState ('');
  const [meals, setMeals] = useState ({})

  useEffect(()=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => setMeals(data))
  },[])

  const handleSrcInput = e => {
    const result = e.target.value;
    setSearchText(result)
    console.log(result)
  }

  return (
    <section className='w-full h-screen'>

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

        <div>
          <h1>Total meals: {meals.len}</h1>
          {
            
          }
        </div>
    </section>
  )
}

export default Meal
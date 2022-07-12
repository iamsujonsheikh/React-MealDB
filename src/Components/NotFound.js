import React from 'react'

const NotFound = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-4xl text-slate-300 '>opps!</h1>
        <p className='text-lg capitalize text-slate-600 py-4'>page not found</p>
        <h1 className='text-9xl font-bold text-slate-400'>404</h1>
    </section>
  )
}

export default NotFound
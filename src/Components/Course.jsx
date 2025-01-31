import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'><h1 className='text-2xl md:text-4xl'>We are Happy to have you <span className='text-pink-500'>here :)</span></h1>
      <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum beatae voluptate quaerat accusantium quod rerum ipsum quia eveniet soluta laudantium quibusdam officiis id, consequatur distinctio ducimus et minus? Rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deserunt quo dolorem provident ducimus magnam est quaerat quia voluptate, autem voluptatem nisi maxime libero! Maxime odit vel sed libero voluptas?</p>
     <Link to="/"> <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-500'>Back</button></Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item) => (
          <Cards key={item.id} item={item}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Course
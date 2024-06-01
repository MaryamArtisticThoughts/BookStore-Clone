import React from 'react'
import banners from "../../public/banners.png"

const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12 gap-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
              Hello, Welcome here to achieve <span className='text-pink-500'>Something Interesting!!!</span>
            </h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum voluptates ipsum illum corporis saepe, optio dignissimos provident dolorem omnis ipsa fugiat adipisci atque earum deleniti temporibus corrupti et minima.</p>

            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-8">Send Us</button>
        </div>
        <div className='order-1 mt-14'>
          <img src={banners} className='w-92 h-92 mt-14' alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner
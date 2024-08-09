import React from 'react'

const CategoryMenu = () => {
  return (
    <div>
        <h3>Category</h3>
        <div className='my-5 flex gap-3'>
              <button className='`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white $ "bg-green-500 text-white"'>All</button>
              <button className='`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white $ "bg-green-500 text-white"'>Breakfast</button>
              <button className='`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white $ "bg-green-500 text-white"'>Lunch</button>
              <button className='`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white $ "bg-green-500 text-white"'>Dinner</button>
        </div>
    </div>
  )
}

export default CategoryMenu
import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlice.jsx"

const FoodCards = ({ id, name, price, desc, img, rating, handleToast }) => {

  const dispatch = useDispatch();
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
        <img src={img} alt="" 
         className='w-auto h-[130px] hover:scale-110'/>
        <div className='text-sm flex justify-between'>
            <h2>{name} </h2>
              <span>₹ {price}</span>
        </div>
         <p className='text-sm text-normal'>{desc.slice(0,40)}... </p>
        <div className='flex justify-between'>
            <span className='flex justify-center item-center'>
                <AiFillStar className='mr-1 text-yellow-400'/>{rating}
            </span>
        <button onClick={() => {
          dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
          handleToast(name);
        }} 
        className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default FoodCards
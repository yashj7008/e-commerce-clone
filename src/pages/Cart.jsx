import React from 'react'

import {useSelector , useDispatch} from 'react-redux'

import { remove } from '../store/cartSlice'

const Cart = () => {

  const items = useSelector((state)=> state.cart)
  const dispatch = useDispatch()


  const handleRemove =(itemId)=>{
       dispatch(remove(itemId))
  }


  return (
    <div>
        <div className='cartWrapper'>

          {  
             items.length === 0 ? (
              <h4>Your cart is Empy </h4>
            ) : (items.map((item)=>(
              <div className='cartCard'> 
                 <img src={item.image} alt='not found'></img>
                 <h5>{item.title}</h5>
                 <h5>Price : ${item.price} </h5>

                 <button className='remove-btn' onClick={()=> handleRemove(item.id)}>Remove Item</button>
              </div>
            )))
            

           
          }
        </div>
    </div>
  )
}

export default Cart
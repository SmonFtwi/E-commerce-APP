/* eslint-disable react/prop-types */
import { ShoppingCart, HeartStraight } from "phosphor-react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../features/counter'


function ProductCard({data}){
    const [hover, setHover] = useState(false);
    const count = useSelector((state) => state.counter.products[data.id] || 0);
    const dispatch = useDispatch()

    return (
        <>
       <div className=" w-2/5 md:w-1/5 h-96 shadow-md rounded-md flex flex-col relative justify-center hover:scale-105 ease-in-out duration-300 ">
      
       <HeartStraight size={32}  className="absolute top-2 right-2"/>
       <img className="rounded-md flex-initial h-4/6 w-4/5 ml-5 bg-slate-300  bottom-1" src={data.image} alt={`Product ${data.id}`} />
       <div className=" mt-5">
       <h4 className=" text-center"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ? data.title : data.title.substring(0, 20) + (data.title.length > 20 ? '...' : '')}
       </h4>
      
    
      <div className=" flex justify-between m-5 mb-0  ">
      <p className=" md:text-lg ">Price: ${data.price}</p>
      <button  className=" flex text-lg relative text-gray-950" onClick={() => dispatch(increment({ id: data.id }))}>
      <ShoppingCart size={32} />  <span style={{ display: count > 0 ? 'block' : 'none' }}>{count}</span>
      </button>
      </div>
       </div>
       
      
    </div>

        </>
    )
}

export default ProductCard;
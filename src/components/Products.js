import React,{useState} from 'react'
import Cart from './Cart'
import Carts from './Carts'
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillGridFill,BsListTask} from "react-icons/bs";
const Products = () => {
    const [grid, setGrid] = useState(false)
    return (
        <div >
           <BsListTask onClick={()=>setGrid(true)} color="red"/>
            <button onClick={()=>setGrid(false)}><BsFillGridFill/></button>
            <div className={grid ? "cards-1" :"cards-4" }>
               <Carts/>
           <Carts/>
           <Carts/>
           <Carts/>
           <Carts/>
           <Carts/>  
            </div>
          
        </div>
    )
}

export default Products

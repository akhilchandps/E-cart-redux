
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, emptyCart } from "./redux/Slices/cartSlice";
import { useEffect, useState } from "react";
function Cart() {

    const cartArray = useSelector((state)=>state.cartReducer)
    const dispatch = useDispatch()
    console.log(cartArray);

   const [cartTotal,setCartTotal]= useState('')

    const getCartTotal=()=>{

     if(cartArray.length>0){

        setCartTotal(Math.floor(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2)))
        
     }
    }
   
    useEffect(()=>{
        getCartTotal()
    },[cartArray])



    const handleCartorder=()=>{

        dispatch(emptyCart())
        alert('Your cart order has been placed....')
    }
  return (
    <div>
        <div className="row">
            <div className="col m-3">
                <table className="border">
                    <thead>
                        <tr className="text-center">
                            <th className="border px-3">id</th>
                            <th className="border px-3">name</th>
                            <th className="border px-3">image</th>
                            <th className="border px-3">price</th>
                            <th className="border px-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                        cartArray?.length>0? cartArray.map((item,index)=>(
                            <tr className="text-center">
                            <td className="borde px-3r">{index+1}</td>
                             <td className="border px-3">{item.title}</td>
                             <td className="border px-3 py-3"><img src={item.thumbnail} alt="" width={"120px"}/></td>         
                             <td className="border px-3">{item.price}</td>
                             <td className="text-danger px-3 fs-3 border " style={{cursor:"pointer"}} ><button className="text-danger btn btn-light fs-4 shadow" onClick={()=>dispatch(deleteFromCart(item.id))}><RiDeleteBin6Fill /></button></td>
                         </tr> 
                        )):"no data"
                       }
                    </tbody>
                </table>
            </div>
            <div className="col m-3">
                <div className="card p-5 text-center">
                    <h3>Cart Summary</h3>

                    <div>
                        <p>Total Cart item:{cartArray.length}</p>
                        <p>Total Price:{cartTotal}</p>
                    </div>

                 <div>
                 <button className="btn btn-warning" onClick={()=>handleCartorder()}>Check out</button>
                 </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { deleteFromWishlist } from './redux/Slices/wishlistSlice';
import { addCartlist } from './redux/Slices/cartSlice';

function Wishlist() {
  const whishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  // console.log(whishlistArray);


  const handleWishlistCart=(product)=>{

    dispatch(addCartlist(product))
    dispatch(deleteFromWishlist(product.id))

  }
  return (
    <div>
      <div className="row">
        {
          whishlistArray?.length>0? whishlistArray.map((product)=>(
            <div className="col m-5 d-flex justify-content-center">
               <MDBCard style={{height:"450px",width:"300px"}}>
      <MDBCardImage src={product.thumbnail} position='top' alt='...'  height={"200px"} style={{objectFit:"contain"}}  />
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>
         {product.description.slice(0,60)}
        </MDBCardText>
        <div className='d-flex justify-content-around'>
        <MDBBtn href='#' className='text-danger btn-light shadow fs-4' onClick={()=>dispatch(deleteFromWishlist(product.id))}><RiDeleteBin7Fill /></MDBBtn>
        <MDBBtn href='#' className='text-success btn-light shadow fs-4' onClick={()=>handleWishlistCart(product)}><FaCartShopping /></MDBBtn>
        </div>
 
      </MDBCardBody>
    </MDBCard>
            </div>
          )):"no wishlist"
        }
      </div>

    </div>
  )
}

export default Wishlist
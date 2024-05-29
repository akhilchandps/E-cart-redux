import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

  const whishlistArray = useSelector((state)=>state.wishlistReducer)


  const cartArray = useSelector((state)=>state.cartReducer)
  return (
    <div>
       <MDBNavbar light bgColor='primary' style={{height:"90px"}}>
        <MDBContainer>
          <MDBNavbarBrand href='#' className="text-light  mb-3">
          <i className="fa-solid fa-cart-shopping me-2"></i>
          <Link to={'/'} className="text-light" style={{textDecoration:"none"}}>
          ShopNShop
          </Link>
          
          </MDBNavbarBrand>
          <div className="text-center row" style={{display:"flex", alignItems:"center",justifyContent:"space-around"}}>

          <div className="col">
        <Link to={'wishlist'} style={{textDecoration:"none"}}>
          <span className="fs-3 text-danger shadow-dark"><FaHeart /></span>
          <span><p className="text-primary bg-light px-3 py-1 rounded-1">{whishlistArray.length}</p></span>
          </Link>
        </div>

            <div className="col">
            <Link to={'cart'} style={{textDecoration:"none"}}>
            <span className=" fs-3  text-light"><FaCartShopping /></span>
            <span ><p className="text-primary bg-light  px-3 py-1 rounded-1" >{cartArray.length}</p></span>
            </Link>
            </div>
         
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header

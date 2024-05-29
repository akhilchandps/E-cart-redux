import useFetch from "../Hooks/usefetch"
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,

} from 'mdb-react-ui-kit';
import img1 from '../Components/img/img1.jpg'
import { useDispatch } from "react-redux";
import { addTowishlist } from "./redux/Slices/wishlistSlice";
import { addCartlist } from "./redux/Slices/cartSlice";
import { motion } from "framer-motion"
function Home() {

  const dispatch = useDispatch()

  const result = useFetch('https://dummyjson.com/products');
  console.log(result);
  return (

    <div className="row">
       <div className='col-lg-12 colmain'>
            <img src={img1} alt=""  width={'100%'} height={"550px"} style={{objectFit:"cover"}}/>
            <div className="desc m-5 p-2 col-md-6">
              <h1 className="py-3">Welcome to ShopNShop</h1>
              <p>your ultimate online shopping destination! Discover a curated selection of high-quality products ranging from the latest fashion trends and beauty essentials to cutting-edge electronics and home goods. Whether you're updating your wardrobe, ShopNshop has everything you need in one convenient place. Enjoy a seamless shopping experience with user-friendly navigation, exclusive deals, and  Dive into a world of possibilities and let ShopEuphoria bring a touch of joy to your shopping journey!</p>
            </div>
           
            </div> 
      {
           
        result?.length>0?result.map((products)=>(
          <motion.div 
          
          initial={{y:50, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={{delay:0.2, y:{type:"spring",stiffness:60}, opacity:{duration:1},ease:"easeIn",duration:1}}
          
          
          
          className="col  d-flex justify-content-center" >
            <MDBCard  className="m-5 col5 " style={{height:"460px",width:"300px"}}>
      <MDBCardImage className="colimg"  src={products.thumbnail} position='top' alt='...' width={"100%"}  height={"200px"} style={{objectFit:"contain"}}/>
      <MDBCardBody>
        <MDBCardTitle>{products.title}</MDBCardTitle>
        <MDBCardText>
         {products.description.slice(0,60)}
        </MDBCardText>
        <MDBCardText>
         Price:{products.price}
        </MDBCardText>

        <div className="d-flex justify-content-around fs-3 m-2">

          <span className="text-success shadow px-3 py-1" style={{cursor:"pointer"}} onClick={()=>dispatch(addCartlist(products))}><FaCartShopping /></span>
          <span className="text-danger shadow px-3 py-1" style={{cursor:"pointer"}} onClick={()=>dispatch(addTowishlist(products))}><FaHeart /></span>
 
 
        </div>

      
      
      </MDBCardBody>
    </MDBCard>
      </motion.div>
        )):"null"
      }
     
    </div>
  )
}

export default Home

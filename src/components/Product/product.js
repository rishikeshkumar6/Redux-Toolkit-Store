import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './product.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {getProduct} from '../../components/store/productSlice'
import {add} from '../../components/store/cartSlice'

const Product = () => {
  const dispatch=useDispatch()
  const {data:productdata}=useSelector(state=>state.product)
 
    useEffect(()=>{
        // async function getData(){
        //    const response=await axios.get("https://fakestoreapi.com/products")
        //    console.log(response)
        //    getProductData(response.data)
        // }
        // getData()
      dispatch(getProduct())

    },[])

    function addToCart(product){
       dispatch(add(product))
    }

    

    const card=productdata.map((product)=>{
        return (
          
            <div className="col-md-3" >
              <Link to={`/products/${product.id}`} >
              <Card style={{ width: "18rem" }} key={product.id} >
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>$ {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
          </Card.Footer>
        </Card>
        </Link>
       
      
          </div>       
        
       
        )
    })
  return (
    <div className={styles.cardcontainer}>
        
    {card}
   
    </div>
  )
}

export default Product

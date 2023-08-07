import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {remove} from '../../components/store/cartSlice'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Cart = () => {
  const dispatch=useDispatch()
  const productdata=useSelector(state=>state.cart)

const removeitem=(id)=>{ 
    dispatch(remove(id))
}

  const card=productdata.map((product)=>{
    return (
        <div className="col-md-12">
          
          <Card style={{ width: "18rem" }} key={product.id}>
      <div className="text-center">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100px", height: "130px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={()=>removeitem(product.id)}>Remove Item</Button>
      </Card.Footer>
    </Card>
      </div>       
   
    )
})
  return (
    <div className="row">
      <h1>cart components</h1>
     {card}
    </div>
  )
}

export default Cart
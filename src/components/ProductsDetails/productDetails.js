import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './product.module.css'
import {  useSelector } from 'react-redux'

const ProductDetails = () => {
    const {id}=useParams()
    const {data:productdata}=useSelector(state=>state.product)
    const product=productdata.find((data)=>data.id===parseInt(id))
   
  return (
   <>
      {product && 
       <div className={styles.product}>
         <img src={product.image} alt="error"/>
        <p> {product.category}</p>
        <p> {product.title}</p>
         <p>{product.description}</p>
         <button >Buy Product</button>
       </div>
      }
    </>
    
  )
}

export default ProductDetails

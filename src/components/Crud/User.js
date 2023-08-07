import React from 'react'
import styles from './User.module.css'
import { useState } from 'react'
import {removeData} from '../store/userSlice'
import { getData } from '../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
const User = () => {
    const [input,setInput]=useState({
        name:"",
        email:"",
       
    })
    const userData=useSelector(state=>state.user)
    const dispatch=useDispatch()
    
    function handleChange(e){
       setInput({...input,[e.target.name]:e.target.value})
    }

    function handleClick(e){
         e.preventDefault()
         dispatch(getData(input))
    }
    function removeItem(email){
       dispatch(removeData(email))
    }
  return (
    <div className={styles.userContainer}>
      <div className={styles.inputContainer}>
      <input type="text" name="name" value={input.name} onChange={handleChange}/>
      <input type="email" name="email" value={input.email} onChange={handleChange}/>
      </div>
      <button onClick={handleClick}>submit</button>

      <ul>{
        userData.map((user)=>{
            return <li >
                {user.name}
                {user.email}
                <button onClick={()=>removeItem(user.email)}>Delete</button>
            </li>
        })
        }</ul>
    </div>
  )
}

export default User

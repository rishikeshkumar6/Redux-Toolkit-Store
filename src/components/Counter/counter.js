import React from 'react'
import { addition } from '../store/counterSlice'
import { useSelector,useDispatch } from 'react-redux'
const Counter = () => {
    const dispatch=useDispatch()
    const count=useSelector(state=>state.counter)
    function add(){
        dispatch(addition())
    }
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={add}>add</button>
    </div>
  )
}

export default Counter

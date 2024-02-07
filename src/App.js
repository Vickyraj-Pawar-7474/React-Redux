import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { incNumber, decNumber, resetNum } from './Action/Index';


const App = () => {
  const dispatch = useDispatch();
  const myState=useSelector((state)=>state.changeNumber)
  return (
    <div style={{textAlign:"center"}}>
      <h2>Increment & Decrement</h2>
      <h4>Using React-Redux</h4>
      <div>
        <button style={{margin:'15px'}} onClick={()=>dispatch(decNumber())}> - </button>
       <span >{myState} </span>
        <button style={{margin:'15px'}} onClick={()=>dispatch(incNumber())}> + </button> <br/>
        <button onClick={()=>dispatch(resetNum())}>Reset</button>
      </div>
    </div>
  )
}

export default App

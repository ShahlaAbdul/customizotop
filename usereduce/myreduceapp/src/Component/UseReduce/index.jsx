import React, { useReducer } from 'react'

function useReduce(state,action){
    switch (action.type) {
        case "count/add":

            return {...state,count:(state.count+action.payload)}
            
        case "count/dec":
            
            return  {...state,count:(state.count-action.payload)}
           
    
        default:
            return state
    }

}





function UseReduce() {
    
const [state, dispatch] = useReducer(useReduce, {count:0})

function handleAdd(payload) {
    dispatch({type:"count/add",payload})
}
function handleRemove(payload) {
    dispatch({type:"count/dec",payload})
}

  return (
    <div>
        <div>{state.count}</div>
        <button onClick={()=>handleAdd(4)}>+</button>
        <button onClick={()=>handleRemove(8)}>-</button>
    </div>
    


  )
}

export default UseReduce
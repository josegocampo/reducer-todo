import React, { useReducer , useState } from 'react'; 
import { todoReducer, initialState } from './reducers/reducer';
 
const Todo = () => {

const [state, dispatch] = useReducer(todoReducer, initialState);

const [newTodo, setNewTodo] = useState('');

const handleChanges = e => {
    setNewTodo(e.target.value)
}

const addNewTodo = e => {
    dispatch({ type: "ADD_TODO", payload: newTodo })
}

return (
   <div>
    <div className = 'form'>
           <input 
           type = 'text'
           name = 'addNewTodo'
           value = {newTodo}
           onChange = {handleChanges}
           />
    
           <button onClick={addNewTodo}>Submit</button>
    </div>  
 <div> 
     
     {console.log(state)}
 {
 
 !state.completed ? (
     <div>{state.item} <button>Completed</button> 
</div>

 )
    : (
        <div>bla</div>
    )
 
 }
 
 </div>

   </div>
    
)

}


export default Todo
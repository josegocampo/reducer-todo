import React, { useReducer , useState } from 'react'; 
import { todoReducer, initialState } from './reducers/reducer';
 
const Todo = () => {

const [state, dispatch] = useReducer(todoReducer, initialState);

const [newTodo, setNewTodo] = useState('');

// const [deleted, setDeleted] = useState('');

const handleChanges = e => {
    setNewTodo(e.target.value)
}

const addNewTodo = e => {
    dispatch({ type: "ADD_TODO", 
    payload: 
    {item: {newTodo},
    completed: false,
id: Math.random() * 10000} 
})
}

// const deleteTodo = e => {
//     dispatch ({ type: "DELETE_TODO", payload: true })
// }

return (
   <div>
    <div className = 'form'>
           <input 
           type = 'text'
           name = 'addNewTodo'
           value = {newTodo}
           onChange = {handleChanges}
           />
    
           <button onClick={() => dispatch({ type: "ADD_TODO", 
           payload: 

           {item: newTodo,
            completed: false,
            id: Math.random() * 10000} 
            
            })
        }>Submit</button>
           
    </div>  
 <div> 
     
     {console.log(state)};

     {
     state.map((e) => !e.completed ? 
     ( <div>{e.item} 
     < button onClick={() => dispatch({ type: "DELETE_TODO", payload: true})} > Done </button>
      </div>
     
     )
     : 
     (<div>d</div>)
     )
     }
 
 </div>

   </div>
    
);
};


export default Todo
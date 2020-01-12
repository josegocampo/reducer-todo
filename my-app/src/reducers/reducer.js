export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about me',
    completed: false,
    id: 4455666
  },
  {
    item: 'Learn about you',
    completed: false,
    id: 55556667
  }]


export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO": 
      console.log(action.payload)
      return [...state, state.push(action.payload.item)];
      case "DELETE_TODO":
        return {...state}
      default:
        return state; 
    }
}



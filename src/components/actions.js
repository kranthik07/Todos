
export function addTodos(text) {
 console.log(text);
  return { 
    type: ADD_TODO,
    text };
}
 
  export const ADD_TODO = 'ADD_TODO'
  
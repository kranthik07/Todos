 //import {combinereducer} from 'redux';
 import {ADD_TODO} from '../components/actions';

const intialstate ={
  todos:[
    {text:"hello"}
  ]}
 const  combinereducer = (state = intialstate, action)=> {
   
  switch (action.type) {
  
    case ADD_TODO:
    console.log(state);
    debugger;
     return [
       ...state.todos,
       {
         text: action.text
       }
      
      ]
    default:
      return state
  }
  }
  export default combinereducer;
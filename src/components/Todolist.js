import {connect} from 'react-redux';
import React from 'react';
import AddTodos from './AddTodos';


class Todolist extends React.Component {
    render() {
        const {todos} = this.props;
         console.log(todos);
            return(
            <div className="todo">
                <ul className='todo__list'>
                    <AddTodos/>

                   {!!todos && todos.map((t, index)=>(     
                       <li key={index}>{t.text}</li>
                   ))}
                 
                </ul>
            </div>
            );
    }
}


const mapStateToProps = state => {
    return {
        todos: state.todos
       
    };
};

export default connect(mapStateToProps)(Todolist);
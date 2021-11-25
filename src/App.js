import React from "react";
import { connect } from 'react-redux';
import {ADD_TODO} from './data/constants'
import {createTodo} from './data/actions';

class App extends React.Component {

  render(){
    const {isCreationLoading, list, addTodo} = this.props;
    if(isCreationLoading) return <p>Todo is creating</p>
    return (
      <div className="App">
      <header className="App-header">
        <p>
          Todos
        </p>
        
        <button onClick={()=> this.props.addTodo({title: "Test", description: "test description"})}>Add</button>
        {list.map((todo, index)=>(
          <p key={Number(index)}>{todo.title}</p>
        ))}
      </header>
    </div>
    )
  }
}

export default connect(
  state => ({
    isCreationLoading: state.todos.isCreationLoading,
    error: state.todos.error,
    list: state.todos.list,
  }),
  dispatch => ({
    // addTodo: newTodo=> dispatch({type: ADD_TODO, payload: newTodo}),
    addTodo: newTodo=> dispatch(createTodo(newTodo)),

  })

)(App);

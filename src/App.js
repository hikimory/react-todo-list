import React from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy bread'},
    {id: 2, completed: false, title: 'Buy oil'},
    {id: 3, completed: false, title: 'Buy milk'},
  ])

  function toggleTodo(id){
    setTodos (todos.map(todo => {
        if(todo.id === id)
        {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }
 // {removeTodo: removeTodo} = {removeTodo}
  return (
    <Context.Provider value={{removeTodo, toggleTodo}}> 
      <div className="wrapper">
        <h1>React tutorial</h1>
        {todos.length ? < TodoList todos={todos} /> : <p>No todos !</p>}
      </div>
    </Context.Provider>
  )
}

export default App;

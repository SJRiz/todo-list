// Import all the components
import { useState } from "react"
import { TodoList } from "./TodoList"
import { NewTodoForm } from "./NewTodoForm"

// Code for the main app
export default function App() {
  // Hook to get current todos, and a function to change the todos
  const [todos, setTodos] = useState([])
  
  // Function that completes the todo if checked
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      // Use a map to update the todos. Find the todo with the matching id and check it
       return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
       })
    })
  }

  // Function that deletes a todo
  function deleteTodo(id) {
    setTodos(currentTodos => {
      // Update the todo list with a filtered one (one without the selected id)
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // Function that adds a todo
  function addToDo(title) {
    setTodos(currentTodos => {
      // Update the todo list with the current one + the new todo
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addToDo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
// Import all the components
import { useEffect, useState } from "react"
import { TodoList } from "./TodoList"
import { NewTodoForm } from "./NewTodoForm"

// Code for the main app
export default function App() {

  // Hook to get current todos, and a function to change the todos
  const [todos, setTodos] = useState(() => {

    // Load todos from local storage
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return [] // If theres nothing, return empty array
    return JSON.parse(localValue)
  })
  
  // If any todos are changed, update it in the local storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-center border-4 backdrop-blur-2xl
     border-gray-900 size-1/3 container mx-auto p-4 rounded-3xl shadow-lg hue-rotate-30
     bg-gradient-to-tr from-blue-800 to-gray-900 transform transition-transform duration-300 ease-in-out hover:scale-110">
      <NewTodoForm onSubmit={addToDo}/>
      <br></br>
      <h1 className=" text-4xl"><u>Todo List</u></h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}
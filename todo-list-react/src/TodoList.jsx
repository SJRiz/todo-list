import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {

    return (
        <div className="h-1/2 overflow-y-auto">
            <ul className="list">
                {todos.length === 0 && "No Todos"}
                {todos.map(todo => {
                    return (
                        <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label className="flex items-center justify-between space-x-2 w-full">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={e => toggleTodo(id, e.target.checked)}
                        className="w-4 h-4 text-blue-500 border-gray-400 rounded-md focus:ring-blue-500"
                    />
                    <span className="flex-grow">{completed ? (<del>{title}</del>) : (<p>{title}</p>)}</span>
                </div>
                <button
                    onClick={e => deleteTodo(id)}
                    className="btn bg-red-600 text-white rounded-3xl w-6 transform transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-lg active:scale-95 active:bg-red-700"
                >
                    X
                </button>
            </label>
        </li>
    );
}
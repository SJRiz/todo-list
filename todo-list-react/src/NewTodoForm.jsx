import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    // Function that handles submitting
    function handleSubmit(e) {
        e.preventDefault() // Prevents the page from reloading on click
        if (newItem === "") return // Don't do anything if the user doesnt type anything
        onSubmit(newItem)
        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item" className=" text-2xl">New Item </label>
                <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text"
                className="bg-amber-50 rounded-3xl shadow-black text-black text-center"
                id="item"/>
            </div>
            <br></br>
            <button className="btn bg-green-700 size-10 w-1/4 rounded-lg 
               transform transition-all duration-200 ease-in-out
               hover:scale-110 hover:shadow-lg
               active:scale-95 active:bg-green-600">Add</button>
        </form>
    )
}
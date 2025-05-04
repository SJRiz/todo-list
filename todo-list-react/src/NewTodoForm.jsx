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
                <label htmlFor="item">New Item</label>
                <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text"
                id="item"/>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}
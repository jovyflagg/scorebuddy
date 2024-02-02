import { useTodo } from '@/context/TodoContext';
import React, { useState } from 'react'

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        add({ todo })
        setTodo("")
    }
    return (
        <form onSubmit={add}>
            <input type="text"
            placeholder='create todo ...'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default TodoForm
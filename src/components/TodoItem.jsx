import { useTodo } from '@/context'
import React, { useState } from 'react'

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMessage, setTodoMessage] = useState(todo.todo)

    const { updateTodo, deleteTodo } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: message })
        setIsTodoEditable(false)
    }

    return (
        <div><input type="text"
        value={message}
        />
        
        </div>
    )
}

export default TodoItem
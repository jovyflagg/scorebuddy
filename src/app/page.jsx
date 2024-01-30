"use client"

import { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import styles from "./homepage.module.css";
import GamesComp from "@/components/GamesComp/GamesComp";
import { TodoProvider } from "@/context/TodoContext"

export default function Home() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    const todo = {
      id: nanoid(),
      todo: "Message",
      complete: false
    }
    setTodos((prev) => [todo, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => { setTodos((prev) => prev.filter((todo) => todo.id !== id)) }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      <h1>Hello</h1>
    </TodoProvider>
  );
}


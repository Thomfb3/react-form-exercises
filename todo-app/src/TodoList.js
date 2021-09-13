import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";


function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoObj) => {
        setTodos(todos => [ ...todos, todoObj])
    };
   
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    };

    const todoComponents = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            handleRemove={removeTodo}
        />
      ));
   
    return (
        <div>
            <NewTodoForm createTodo={addTodo} />
            {todoComponents}
        </div>
    );
};

export default TodoList;
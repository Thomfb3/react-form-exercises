import React from "react";
import "./Todo.css";

function Todo({
    id,
    text,
    handleRemove,
}) {
    const removeTodo = () => handleRemove(id);

    return (
        <div className="Todo" >
            <p>{ text }</p>
            <button onClick={removeTodo}>X</button>
        </div>
    );
}



export default Todo;
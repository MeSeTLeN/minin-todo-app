import React from "react";

function TodoItem({todo, index}) {
    
    return(
        <li><strong>{index+1}</strong>{todo.title}</li>
    )
}

export default TodoItem
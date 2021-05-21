import React from "react"
import Todoform from "./TodoForm"

export default function Todo({todoList,remove}){
    return(
        <div className="todo-wrapper">{
            todoList.map((item,index)=>
            <Todos item={item} index={index} remove={remove} key={index}/>
            )  
        }  
        </div>
    )
}

function Todos({item,index,remove}){
    return(
    <div className="todo-container">
        <p style={{textDecoration:(item.isCompleted)?"line-through red":"",color:(item.isCompleted)?"green":"red"}} >
            <input type="checkbox" onChange={()=>remove(index)} className="checkbox"/>{''}
            {item.text}
        </p>
    </div>
    )
}
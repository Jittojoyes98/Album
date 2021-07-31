import React, { useEffect, useState } from "react"
import {useSelector} from "react-redux"
import { decrement,increment } from "./redux/duck/counter";
import store from "../src/redux/configureStore"

export default function Counter(){
    const count=useSelector((state)=> state.counter.count)
    const toIncrement=()=> store.dispatch(increment());
    const toDecrement=()=> store.dispatch(decrement());

    return(
        <div style={{backgroundColor:"red",width:"40vw",height:"40vh"}}>
            <h3 style={{textAlign:"center"}}>{`The count is ${count}`}</h3>
            <div style={{display:"flex",justifyContent:"center"}}>
                <button onClick={toIncrement}>Increment Here</button>
                <button onClick={toDecrement}>Decrement Here</button>
            </div>
        </div>
    )
}
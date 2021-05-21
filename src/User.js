import axios from "axios"
import React, { useEffect, useState } from "react"
import {Link, Route} from "react-router-dom"

export default function User({item}){
    
    const [len,setLen]=useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${item.id}/albums`)
            .then((response)=>{
                // console.log(response.data)
                setLen(response.data)
            })
    },[])
    return (
        <div className="user-data"> 
            <Link to={`users/${item.id}/albums`} className="link-home">{item.name}</Link>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{len ? len.length:0}</p>
        </div>
    )
}
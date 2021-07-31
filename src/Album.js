// https://codesandbox.io/s/angry-johnson-c76sf?file=/src/App.js
// the above mentioned is for react as a class based components

import axios from "axios"
import React, { useEffect, useState } from "react"
import {useParams,Link} from "react-router-dom"

export default function Albums({searchdata,setSearchdata}){
    const {id}=useParams()
    const [album,setAlbum]=useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then((response)=> {
            setSearchdata(false);
            setAlbum(response.data)})
        // console.log(typeof[response.data])

    },[])
    // console.log(album)
    return(
        <div className="album">
            <h1>{`The no of albums here :`}{album ? album.length: 0}</h1>
            {
                album && album.map((item,index)=>{
                return(
                    <div className="album-each" key={index}>
                        <Link to={`/albums/${item.id}/photos`}>{item.title}</Link>
                    </div>
                )
                })
            }
        </div>
    )
}


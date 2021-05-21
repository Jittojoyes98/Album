import React, { useEffect, useState } from "react"
import axios from "axios"
import User from "./User"
    
export default function Home({searchdata,val}){
    const [userdata,Setuserdata]=useState();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=> {
                // console.log(response.data)
                Setuserdata(response.data)
            })
    },[])
    // console.log(searchdata)
    if(searchdata==false){
        return (
            <div className="main-wrapper">
                {
                    userdata && userdata.map((item,index)=>{
                        return (
                            <User item={item} key={item.id}/>
                        )
                    })
                }
            </div>
        );
    }
    else{
        return (
            <div className="main-wrapper">
                {
                    // let user;
                    userdata && ((userdata.filter((element)=>{
                        let k=val.length;
                        return (element.name.slice(0,k)===val)
                    }).length>0 ? (userdata.filter((element)=>{
                        let k=val.length;
                        return (element.name.slice(0,k)===val)
                    }).map((item,index)=>{
                        return(
                            <User item={item} key={item.id}/>
                        )
                    })) : <h1>No Result available</h1>))
                }
            </div>
        );
    }
}
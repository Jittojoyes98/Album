import React, { useEffect, useState } from "react"



export default function Searchbar({searchdata,setSearchdata,val,setVal}){
    function submit(e){
        e.preventDefault();
        console.log("submitted")
        setSearchdata(true);
    }
    function handeleChange(e){
        if(searchdata==true){
            setSearchdata(false);
        }
        setVal(e.target.value)
    }
    return(
        <div className="form">
            <form type="submit" onSubmit={submit}>
                <input type="text" placeholder="Search here.." onChange={handeleChange} className="search-box"/>
                <input type="submit" value="Search" className="search"/>
            </form>
        </div>
    )
    
}
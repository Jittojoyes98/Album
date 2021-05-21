import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Gallery(){
    const {id}=useParams();
    const [source,setSource]=useState();
    let group=[]
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then((response)=>setSource(response.data))
    },[])
    // let group=[]
    // for(let i=0;i<source.lenght;i+=4){
    //     let res=[]
    //     let k=(i+4<source.lenght ? i+4 : source.lenght-1)
    //     for(let j=i;j<k ;j++){
    //         res=[...res,{url:source[i].url}]
    //     }
    //     group=[...group,res]
    // }
    function createarray(i,val){
        let res=[]
        let k=(i+4<val ? i+4: val)
        for(let j=i;j<k ;j++){
            res.push(<img src={source[j].url}/>)
        }
        return res;
        
    }
    function divide(val){
        let group=[]
        for(let i=0;i<(val/4);i++){
            group=[...group,createarray(i,val)];
        }
    }
    return(
        <div>
            <div className="gallery-img">
                {
                    source && source.map((item,index)=>{
                        // console.log(item)
                        return(
                            <div className="img">
                                <img src={item.url} key={index} alt="../public/logo193.png"></img>
                            </div>
                        )
                    })

                    // group.map((item,index)=>{
                    //     console.log(item)
                    //     )
                    // })
                }
            </div>
            
        </div>
    )
    
}
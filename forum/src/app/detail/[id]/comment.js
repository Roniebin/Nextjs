'use client'

import { useState,useEffect } from "react"

export default function Comment(props)
{

    let [comment,setComment]=useState('')

    let [data,setData]=useState('')

    useEffect(()=>{
        fetch('/api/post/getcomment?id='+props.parentId).then((r)=>{return r.json()})
        .then((result)=>{
            setData(result)
        })
          
        
    },[])

    return(
    <div>
        <div>댓글 목록 보여줄 부분</div>

            <input onChange={(e)=>{setComment(e.target.value)}}/>
            <button onClick={()=>{
              
                fetch('/api/post/comment',{method:'POST',body:JSON.stringify( {comment : comment , parentId:props.parentId} )})
                .then((r)=>{return r.json()})
                .then((result)=>{
                    setData(result);
                })
            }}>댓글전송</button>

        {
            data.length > 0? 
            data.map((a,i)=>{
                return(
                    <p>
                        {a.comment} , {a.author}
                    </p>
                    
                )
            }):"로딩중"
        }
    </div>
    )
}
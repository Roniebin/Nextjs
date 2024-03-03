'use client'
import { useState
 } from "react";

export default function List() {

  let 상품 =['Tomatoes','Pasta','Coconut'];
  let [수량,setCount]=useState([0,0,0])
 
  return (
    <div>
      <h4 className="title">상품목록</h4>

    {
        상품.map((a,i)=>{
            return (
                <div className="food" key={i}>
                <img src={"/food"+i+".png"} className="food-img"></img>
                <h4>{상품[i]} $40</h4>
                <span>{수량[i]}</span>
                <button onClick={()=>{
                  let copy=[...수량]
                  copy[i]=copy[i]+1

                  setCount(copy)
                }}>+</button>

                <button onClick={()=>{
                  if (수량[i]>0)
                  {
                    let copy=[...수량]
                    copy[i]=copy[i]-1
  
                    setCount(copy)
                  }
               
                }}>-</button>
                </div>
            )
        })
    }
   
    </div>
   
    
  );
}




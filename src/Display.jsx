import React, { useState } from 'react'

function Display(props) {
    let arr=props.arr
    function remove(e){
        console.log(e.target.id)
        props.rem(e.target.id)
    }
  return (
    <>
    {
        arr.map((data,ind)=>{
            return (
            <div id={ind}>
                <p>{data}</p>
                <button onClick={remove} id={ind}/>
            </div>
            )
        })
    } 
    </>
  )
}

export default Display
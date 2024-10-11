import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Comments() {
  var [data,setdata]=useState([])
  useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/comments").then((Response)=>{
        
      
      setdata(Response.data)
    },[])
  })
  return (
    <>
    
      <table class="table table-bordered">
                            {
                              data.map((e)=>{
                                         return(
                                                 <tr>
                                                 <td>{e.postId}</td>
                                                 <td>{e.name}</td>
                                                 <td>{e.email}</td>
                                                 </tr>
                                         )
                              })
                            }
</table>
      
      </>
  )
}

export default Comments
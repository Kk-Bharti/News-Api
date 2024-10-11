import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Post() {
  var [data,setdata]=useState([])
  useEffect(()=>{

          axios.get("https://jsonplaceholder.typicode.com/posts").then((Response)=>{

            console.log(Response)
            setdata(Response.data)
          },[])
  })
  return(
    <>

    <table>
      {
        data.map((e)=>{

                      return(

                        <tr>
                          <td>{e.userId}</td>
                          <td>{e.title}</td>
                          <td>{e.body}</td>
                        </tr>
                      )
        })
      }
    </table>
    </>
  )
}

export default Post
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function User() {
  var [udata,setudata]=useState([])
  useEffect(()=>{

          axios.get("https://jsonplaceholder.typicode.com/users").then((Response)=>{

                                   setudata(Response.data)

          },[])
  })
  return (
    <div>
      <table class="table table-bordered">
                                               {
                                                udata.map((e)=>{

                                                  return(

                                                    <tr>
                                                      <td>{e.id}</td>
                                                      <td>{e.name}</td>
                                                      <td>{e.email}</td>
                                                      
                                                    </tr>
                                                  )
                                                })
                                               }
      </table> 
    </div>
  )
}

export default User
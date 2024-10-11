import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PutDelete() {
    const [data,setdata]=useState({
        id:"",
        username:"",
        email:"",
        phone:""
    })
    function txthandle(e){
        
                           setdata({...data,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((Response)=>{

            console.log(Response.data)
            
        })
    },[])

    function updatehand(e){
e.preventDefault()
        
        axios.put("https://jsonplaceholder.typicode.com/users/1",data).then((Response)=>{

                console.log(Response.data)
        })
    }

    function deletehandal(e){

        axios.delete("https://jsonplaceholder.typicode.com/users/1").then((Response)=>{

            console.log("record is deleted")
        })
    }
  return (
    <div style={{width:"400px" , textAlign:"center", margin:"auto" , paddingTop:"50px"}}>
        <form>
        <input type='text' name='id' onChange={txthandle} ></input>
        <input type='text' name='username' onChange={txthandle}></input>
        <input type='email' name='email' onChange={txthandle}></input>
        <input type='phone' name='phone' onChange={txthandle}></input>
        <button type='submit'>submit</button>
        <button type='submit' onClick={updatehand}>update</button>
        <button type='submit' onClick={deletehandal}>delete</button>
        </form>
    </div>
  )
}

export default PutDelete
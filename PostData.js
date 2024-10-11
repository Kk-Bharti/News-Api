import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PostData() {

    const [data,setData] = useState({
    id:'',
    username :"",
    email:"",
    phone:""
    })

    const [info,setInfo]=useState([])
    function txtHandler(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            
            setInfo(response.data)
        })
    },[])


    function submitHandler(e)
    {
        e.preventDefault()
        
        axios.post("https://jsonplaceholder.typicode.com/users",data).then((response)=>{
            console.log(response)
            setInfo([...info,{...data}])

        })
    }
  return (
    
    <>
    <form onSubmit={submitHandler}>
        <input type="text" name="id" onChange={txtHandler}></input>
        <input type="text" name="username" onChange={txtHandler}></input>
        <input type="text" name="email" onChange={txtHandler}></input>
        <input type="text" name="phone"  onChange={txtHandler}></input>
        <button type='submit'>Submit Post</button>
    </form>

    <table>
        {
            info.map((e)=>{

                return(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.phone}</td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                    </tr>
                )
            })
        }
    </table>
    </>
  )
}

export default PostData
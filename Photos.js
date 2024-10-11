import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function Photos() {

  const [data,setData]=useState([])
  const [search,setsearch]=useState("america")
  

  function submith(e){
                      axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2024-09-08&sortBy=publishedAt&apiKey=f4186b0b59b44f9fb32a9248e29acaff`).then((Response)=>{
                        setData(Response.data.articles )
                      })
e.preventDefault()
  }

 function txthandle(e){

              setsearch(e.target.value)
  
 }
  
  return(
<>

<form class="d-flex ms-auto w-25 m-4  "  role="search" ><h3>Search:-</h3>
      <input class="form-control me-2 "  onChange={txthandle} type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" onClick={submith}   type="submit">Search</button>
    </form>


    <div className='container ' id="main" style={{alignItems:"center"}}>
      <div className='row'>
      {
            data.map((e)=>{

              return(

                <div class="card" style={{width: "15rem", height:"23rem" ,margin:"20px"}}>
                              <img src={e.urlToImage} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                 <h5 class="card-title">{e.title}</h5>
                                
                                <button>Read more</button>
                     </div>
                   </div>
              )
            })
      }
    </div>
    </div>
  </>
  )
}

export default Photos
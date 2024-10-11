import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Layout() {

  
  return (
    <>
    <header>


<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container "  >
    <Link class="navbar-brand" to="/comments">comment</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/photos">News</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/post">post</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/user">user</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/postData">postdata</Link>
        </li>
        
        
        
        
      </ul>
    </div>
  </div>
</nav>

        </header></>
  )
}

export default Layout
import React, {lazy, Suspense } from 'react'
import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Photos from './Photos';
import Post from './Post';
import Comments from './Comments';
import User from './User';
import PostData from './PostData';

const comment=React.lazy(()=>import("./Comments"))
const photos=React.lazy(()=>import("./Photos"))
const post=React.lazy(()=>import("./Post"))
const user=React.lazy(()=>import("./User"))
const postdata=React.lazy(()=>import("./PostData"))

function App() {
  return(
  <>
    
      
      <Router>
  <Layout></Layout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/comments" element={<Comments />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/post" element={<Post />} />
          <Route path="/user" element={<User />} />
          <Route path="/postdata" element={<PostData />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App

// import React from 'react'
// import PutDelete from './PutDelete'
// import HOC from './HOC'
// import A from './A'

// function App() {
//   return (
//     <div>
//              <HOC></HOC>
//              <A></A>
//     </div>
//   )
// }

// export default App
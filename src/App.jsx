
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([])
 const [readingTime,setReadingTime]=useState()
 const handledBookmarks=(blog)=>{
const newBookmarks=[...bookmarks,blog]
setBookmarks(newBookmarks)
 }

 const handledReadingTime=time=>{
  console.log("hii there ")
 }
  return (
    <>
   
     <div className=' max-w-screen-xl mx-auto  px-8 lg:px-24 py-5 my-10 '>
     <Header></Header>
     <div className='flex '>
     <Blogs handledBookmarks={handledBookmarks} handledReadingTime={handledReadingTime}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
     
     </div>
    </>
  )
}

export default App


import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {
 

  return (
    <>
   
     <div className=' max-w-screen-xl mx-auto  px-8 lg:px-24 py-5 my-10 '>
     <Header></Header>
     <div className='flex '>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
     
     </div>
    </>
  )
}

export default App

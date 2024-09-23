
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import LayoutTwo from './Layouts/LayoutTwo'
import Help from './Pages/Help'
import Blog from './Pages/Blog'



function App() {

  const myroute = createBrowserRouter(createRoutesFromElements(
    <Route>
          <Route path='/' element={<LayoutOne/>} >
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/layoutTwo' element={<Product/>}/>
          </Route>

          <Route path='/layoutTwo' element={<LayoutTwo/>} >
            <Route index element={<Product/>}/>
            <Route path='/layoutTwo/blog' element={<Blog/>}/>
            <Route path='/layoutTwo/help' element={<Help/>}/>
            
          </Route>

    </Route>
  ))

  return (
    <>
      <RouterProvider router={myroute} / >
    
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import LandingPage from './LandingPage'
import ContactUs from './ContactUs'
import About from './Components/About'
import Home from './Components/Home'
import LatestNews from './LatestNews'
import Login from './Components/Login'
import Register from './Components/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<LandingPage/>}>
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/latestnews' element={<LatestNews />}/>
      <Route path='/contactus' element={<ContactUs/>}/>
    </Route>
    <Route path='login/' element={<Login />}/>
    <Route path='register/' element={<Register />}/>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

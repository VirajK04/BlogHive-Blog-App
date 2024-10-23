import React, {useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login , logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import { Header, Footer, TW_Footer } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))

  }, [])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200'>
      
      <div className="w-full block">
        <Header/>
        <main>
          <Outlet/>
        </main>
        {/* <Footer/> */}
        <TW_Footer/>
      </div>
    </div>
  ) :  null;
}

export default App

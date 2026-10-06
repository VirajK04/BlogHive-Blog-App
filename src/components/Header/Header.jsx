import React, { useState } from 'react'
import { Container, Logo , LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { login as authLogin } from '../../store/authSlice'
import conf from '../../conf/conf'

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [demoLoading, setDemoLoading] = useState(false)

  const handleDemoLogin = async () => {
    setDemoLoading(true)
    try {
      let session
      try {
        session = await authService.login({
          email: conf.demoEmail,
          password: conf.demoPassword,
        })
      } catch (err) {
        if (err?.code === 409) {
          await authService.logout()
          session = await authService.login({
            email: conf.demoEmail,
            password: conf.demoPassword,
          })
        } else {
          throw err
        }
      }

      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(authLogin({ userData }))
        }
        navigate('/')
      }
    } catch (error) {
      console.error('Demo login error:', error)
      alert(error.message || 'Demo login failed.')
    } finally {
      setDemoLoading(false)
    }
  }

  const naItems = [
    {
      name : 'Home',
      slug: '/',
      active : true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  }
  ]


  return (
    <header className='py-3.5 shadow-sm bg-white border-b border-slate-200/80 sticky top-0 z-50'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto items-center gap-1'>
            {naItems.map((item)=> 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={()=>{
                  navigate(item.slug)
                }}
                className='px-5 py-2 duration-200 text-slate-700 font-medium hover:bg-slate-100 hover:text-blue-600 rounded-full text-sm cursor-pointer'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {!authStatus && conf.enableDemoLogin && (
              <li>
                <button
                  onClick={handleDemoLogin}
                  disabled={demoLoading}
                  className='ml-2 px-4 py-2 duration-200 text-white font-medium bg-blue-600 hover:bg-blue-700 rounded-full text-sm cursor-pointer shadow-sm disabled:opacity-60 transition-colors'
                >
                  {demoLoading ? 'Logging in...' : 'Demo Login'}
                </button>
              </li>
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header

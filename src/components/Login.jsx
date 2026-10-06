
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"
import conf from "../conf/conf"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const [demoLoading, setDemoLoading] = useState(false)

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin({ userData: userData }));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    const handleDemoLogin = async () => {
        setError("")
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
                if (userData) dispatch(authLogin({ userData }))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setDemoLoading(false)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>

                {conf.enableDemoLogin && (
                    <button
                        type="button"
                        onClick={handleDemoLogin}
                        disabled={demoLoading}
                        className="w-full py-2.5 px-4 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg text-sm transition-colors duration-200 disabled:opacity-60 cursor-pointer shadow-sm"
                    >
                        {demoLoading ? 'Logging in as Demo...' : 'Instant Demo Login (test@abc.com)'}
                    </button>
                )}
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login

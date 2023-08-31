import axios from 'axios'
import React, { useState } from 'react'
import { Cancel } from '@mui/icons-material'

const Login = ({ setShowLogin, storage ,setCurrentUser}) => {

    const [userData, setUserData] = useState({ email: '', password })
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const { data } = axios.put('/user/login', userData)
            storage.setItem('name', data.result.name)
            setCurrentUser(data.result.name)
            setError(false)
            setShowLogin(false)
        } catch (error) {
            console.log('error in login', error)
            setError(true)
        }
    }

    return (
        <div className='flex flex-col justify-between items-center w-[200px] h-[250px] p-[20px] rounded-[10px] bg-white absolute top-0 bottom-0 right-0 left-0 m-auto '  >

            <div className="logo text-blue-700 flex items-center font-bold ">
                <Room />
                Lamapin
            </div>
            <form onSubmit={handleSubmit} >
                <input type="email" value={userData.name} onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder='Email' className='' />
                <input type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder='Password' className='' />
                <button type='submit' className='border-none p-[5px] rounded-[5px] text-white bg-blue-700 ' >Login</button>
                {
                    error &&
                    <span className='text-red-800 text-[12px] text-center ' >Error. Something went wrong!</span>
                }
            </form>

            <Cancel onClick={() => setShowLogin(false)} className='absolute top-[5px] right-[5px] cursor-pointer ' />

        </div>
    )
}

export default Login
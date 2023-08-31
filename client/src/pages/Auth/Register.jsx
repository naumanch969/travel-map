import axios from 'axios'
import React, { useState } from 'react'
import { Cancel } from '@mui/icons-material'

const Register = ({ setShowRegister}) => {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [userData, setUserData] = useState({ name: '', email: '', password })

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const res = axios.post('/user/register', userData)
            setSuccess(true)
            setError(false)
        } catch (error) {
            console.log('error in registering', error)
        }
    }

    return (
        <div className='flex flex-col justify-between items-center w-[300px] h-[250px] p-[20px] rounded-[10px] bg-white absolute top-0 bottom-0 right-0 left-0 m-auto '  >

            <div className="logo text-blue-700 flex items-center font-bold ">
                <Room />
                Lamapin
            </div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder='name' className='' />
                <input type="email" value={userData.name} onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder='Email' className='' />
                <input type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder='Password' className='' />
                <button className='border-none p-[5px] rounded-[5px] text-white bg-blue-700 ' >Register</button>
                {
                    success
                        ?
                        <span className='text-green-500 text-[12px] text-center ' >Successful. You can login now!</span>
                        :
                        <span className='text-red-800 text-[12px] text-center ' >Error. Something went wrong!</span>
                }
            </form>

            <Cancel onClick={()=>setShowRegister(false)} className='absolute top-[5px] right-[5px] cursor-pointer ' />

        </div>
    )
}

export default Register
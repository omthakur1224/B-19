import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
    const [cred,setCred]=useState({})
    const onChange=(e)=>{
        const {name,value}=e.target;
        setCred({
            ...cred,
            [name]:value
        })
    }
    const onSubmit=(e)=>{
        e.preventDefault();

    }

    useEffect(()=>{
        if(token){
            navigate('/')
        }
    },[token,navigate])


  return (
    <div>
        <form action="" onSubmit={onSubmit}>
            <input type="email" name='email' placeholder='Name' onChange={onChange}/>
            <input type="password" name='password' placeholder='password' onChange={onChange}/>
            <button type='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login
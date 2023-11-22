import React from 'react'
import '../assets/css/signup.css'
import usericon from '../images/46667db2-9e08-4e15-ae57-da76545c7227.jpg'
import pass from '../images/icons8-password-50.png'
import mail from '../images/icons8-mail-50.png'

import { Button, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate();
    const handleSubmit = () =>{
        navigate('/Home')
    }
    const zz=useNavigate();
    const handleLogin = () =>{
        zz('/Login')
    }
  return (
        <div className='bg'>
     <form method='post' onSubmit={handleSubmit}>
        <div className='hello'>

            <div className='text'>
                <h2 style={{fontFamily:'unset',display:'flex',paddingLeft:'185px',fontSize:'30px',textDecoration:'underline'}}>
              
                 SIGN UP</h2>
            </div>
            <div className='inputs'>
                <div className='input'>
                <div className='name'>
                    <img src={usericon} alt="none" width='38px' style={{paddingRight:'10px'}}></img>
                    <input type='text' name='name' id='name' placeholder='Username' minLength={5} maxLength={15} required/>
                </div>
                </div>
                <div className='input'>
                <div className='mail' style={{lineHeight:'60px'}}>
                    <img src={mail} alt="none" width='40px' style={{paddingRight:'10px'}}></img>
                    <input type='email' name='mail' id='mail' placeholder='Mail' style={{lineHeight:'10px'}} required/>
                </div>
                </div>      
                <div className='input'>
                <div className='pass' style={{marginTop:'2px'}}>
                    <img src={pass} alt="none" width='40px' style={{paddingRight:'10px'}}></img>
                    <input type='password' name='current-password' id='current-password' placeholder='Password' required minLength={8} maxLength={16}/>
                </div>
                </div>
                
            </div>
            <div style={{margin:'20px',fontFamily:'cursive'}}className='for'>Already have an account?<Link textDecoration='none' onClick={handleLogin} style={{cursor:'pointer'}}>Login</Link></div>
            
            <div className='signin'>
                    <Button variant='contained' type='submit'>Sign Up</Button>
            </div>              
        </div>
        </form>
        </div>
  )
}

export default Signup
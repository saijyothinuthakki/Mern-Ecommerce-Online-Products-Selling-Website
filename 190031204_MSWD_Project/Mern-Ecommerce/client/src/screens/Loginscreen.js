import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Loader from '../components/Loader'
import Error from '../components/Error'


export default function Loginscreen() {

    const loginreducer =useSelector(state=>state.loginReducer)
    const {loading, error}=loginreducer 
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const dispatch =useDispatch()

    const login = (e)=>{
        e.preventDefault()
        const user={
            
            email:email,
            password:password
        }
        
        dispatch(loginUser(user))
        

        
        
    }

    useEffect(()=>{
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }

    },[])


    return (
        <div>

            <div className="row justify-content-center">

                <div className="col-md-4 card p-3" style={{marginTop:'110px'}}>

                    <div className="div">

                        <h2 className='text-center m-3'>LOGIN</h2>

                        {error && (<Error error="Invalid Cedentials"/>)}
                        {loading && (<Loader />)}





                        <form onSubmit={login}>
                       
                        <input type="email" placeholder='email' className='form-control' value={email} required onChange={(e) => { setemail(e.target.value) }}/>
                        <input type="text" placeholder='password' className='form-control' value={password} required onChange={(e) => { setpassword(e.target.value) }}/>
                        
                        <div className='text-end'>
                        <button type='submit' className='btn mt-3'>LOGIN</button>
                        </div>
                        </form>
                        
                      </div>
                      <a href="/register" className="m-3">Click Here To Register</a>

                </div>
        </div>

 </div>
                
 
 )
}
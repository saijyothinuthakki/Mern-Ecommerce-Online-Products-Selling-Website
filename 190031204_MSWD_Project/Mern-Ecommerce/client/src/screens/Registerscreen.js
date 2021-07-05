import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { registerNewUser } from '../actions/userActions'
import Success from '../components/Success'
import Loader from '../components/Loader'
import Error from '../components/Error'

export default function Registerscreen() {

    const registerstate = useSelector(state=>state.registerNewUserReducer)
    const {loading ,error, success} =registerstate

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const dispatch =useDispatch()

    const register = (e)=>{
        e.preventDefault()
        const user={
            name:name,
            email:email,
            password:password
        }
        if(password==cpassword)
        {
            dispatch(registerNewUser(user))

        }
        else{
            alert('passwords not matched')
        }
        
        
    };


    return (
        <div>

            <div className="row justify-content-center">

                <div className="col-md-5 card p-3" style={{marginTop:'110px'}}>

                    <div className="div">

                        <h2 className='text-center m-3'>Register</h2>
                        {loading && (<Loader/>)}
                        {error &&(<Error error='Email Address is already registered'/>)}
                        {success && (<Success success='Your registration is successful'/>)}

                    
                        <form onSubmit={register}>
                        <input type="text" placeholder='name' className='form-control' value={name} required onChange={(e) => { setname(e.target.value) }}/>
                        <input type="email" placeholder='email' className='form-control' value={email} required onChange={(e) => { setemail(e.target.value) }}/>
                        <input type="text" placeholder='password' className='form-control' value={password} required onChange={(e) => { setpassword(e.target.value) }}/>
                        <input type="text" placeholder='confirm password' className='form-control' value={cpassword} required onChange={(e) => { setcpassword(e.target.value) }}/>
                        
                        <div className='text-end'>
                        <button type='submit' className='btn mt-3'>REGISTER</button>
                        </div>
                        </form>

                      </div>
                      <a href="/login" className="mt-3">Click Here To Login</a>
                </div>
        </div>

 </div>
                
 
 )
}
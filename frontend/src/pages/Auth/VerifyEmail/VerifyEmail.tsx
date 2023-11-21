import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { VerifyEmailWrapper } from './verifyEmail.styles'
import {  sentEmailToVerifyAccountApi } from '../../../api/Api'
import { useNavigate } from 'react-router-dom'
import useAlert from '../../../hooks/useAlert'

const VerifyEmail = () => {
  const [email,setEmail] = useState("")
  const navigate =useNavigate();
  const {notify} = useAlert()

  const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)

  }

  const handleVerifyAccount=async(e:SyntheticEvent)=>{

    e.preventDefault()
  try {
    const {status} = await sentEmailToVerifyAccountApi(email);
    if(status===200){
      navigate("/info/verifyEmail")
       notify("Verification link has been sent to your email","success")
    }
}  catch (error:any) {
  console.log(error)
  notify(error?.response?.data?.message,"error")
}
  }

  return (
    <VerifyEmailWrapper>

    <div className="mainContent">
       <div className="contentHeader">
                <img src="/images/logo.png" alt="logo" />
                <h1 className='headerText'>Verify your account  </h1>
            </div>
            <form className="form" onSubmit={handleVerifyAccount}>
                <input  value={email} type="email" placeholder='your email address' onChange={handleInputChange} required />
                <button type='submit'>Verify </button>
            </form>
    </div>

    </VerifyEmailWrapper>
  )
}

export default VerifyEmail
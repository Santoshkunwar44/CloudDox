import { Link } from "react-router-dom"
import { ForgotPasswordWrapper } from "./ForgotPassword.styles"
import { ChangeEvent, SyntheticEvent, useState } from "react"
import useAlert from "../../../hooks/useAlert"
import { sentEmailToResetPasswordApi } from "../../../api/Api"

const ForgotPassword = () => {
  const [email,setEmail ] =useState("");
  const {notify} = useAlert()
  const [loading,setLoading] = useState(false)





  const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{

    setEmail(e.target.value)

  }

  const handleSentPasswordResetEmail=async(e:SyntheticEvent)=>{
    e.preventDefault()
    setLoading(true)
    try {
     const {status} =   await  sentEmailToResetPasswordApi(email)
     if(status===200){
      notify("Password reset link has been sent to your email","success")
     }
     setLoading(false)
    } catch (error:any) {
      setLoading(false)
      console.log(error)
      notify(error?.response?.data?.message,"error")
    }
  }


  return (
    <ForgotPasswordWrapper>
            <div className="mainContent">
                <div className="contentHeader">
                    <img src="/images/logo.png" alt="" />
                    <h3 className="headerText">Forgot Password</h3>
                </div>
                <form  className="form" onSubmit={handleSentPasswordResetEmail}>
                    <div className="formItem">
                        <label htmlFor="">Email</label>
                        <input required type="email" placeholder="your email address" onChange={handleInputChange} />
                    </div>
                    <button type="submit">Send link to email</button>
                </form>
                <hr className="hrLine" />
               <Link to={"/auth/login"}>
                 <p className="goToText">Back to login</p>
                </Link>
            </div>
    </ForgotPasswordWrapper>
  )
}

export default ForgotPassword
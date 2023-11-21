import { Link } from "react-router-dom"
import { ForgotPasswordWrapper } from "./ForgotPassword.styles"

const ForgotPassword = () => {
  return (
    <ForgotPasswordWrapper>
            <div className="mainContent">
                <div className="contentHeader">
                    <img src="/images/logo.png" alt="" />
                    <h3 className="headerText">Forgot Password</h3>
                </div>
                <form  className="form">
                    <div className="formItem">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="your email address" />
                    </div>
                    <button>Send link to email</button>
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
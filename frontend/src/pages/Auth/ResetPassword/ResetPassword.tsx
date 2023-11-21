import { ResetPasswordWrapper } from './ResetPassword.styles'

const ResetPassword = () => {
  return (
    <ResetPasswordWrapper>
            <div className="mainContent">
                <div className="contentHeader">
                    <img src="/images/logo.png" alt="logoImg" />
                    <h3 className='headerText'>Reset password</h3>
                </div>
                <div className="form">
                    <div className="formItem">
                    <label htmlFor="">password</label>
                    <input type="password" placeholder="new password" name='password' />
                </div>
                    <div className="formItem">
                    <label htmlFor="">confirm Password</label>
                    <input type="password" placeholder="confirm password" name='confirmPassword'  />
                </div>
                <button>Reset password</button>
                </div>
            </div>
    </ResetPasswordWrapper>
  )
}

export default ResetPassword
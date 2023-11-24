import { Link, useNavigate } from "react-router-dom"
import { LoginWrapper } from "./Login.styles"
import {withFormik,FormikProps} from "formik"
import * as Yup from "yup"
import { loginApi } from "../../../api/Api"
import useAlert from "../../../hooks/useAlert"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../../redux"



interface formValues{
    email:string,
    password:string,
    
}

interface otherProps{
    // title:string,
    // ref:any 
    loading:boolean,
    
}

interface myFormProps{
    initialEmail?:string,
    initialPassword?:string,
    login?:any
    loading: boolean; // Add this line
}
const InnerForm=(props:otherProps & FormikProps<formValues>)=>{
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        loading,
        // ref,
    }= props;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent the default form submission behavior
    handleSubmit(e); // Manually call the formik handleSubmit function

  };

    return <>
       <form className="form" onSubmit={submitHandler}>
                <div className="formItem">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="john@gmail.com" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                    {
                        touched.email && errors.email && (
                            <p className="invalidMessage">{errors.email}</p>
                        )
                    }
                </div>
                <div className="formItem">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" placeholder="***********" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                       {
                        touched.password && errors.password && (
                            <p className="invalidMessage">{errors.password}</p>
                        )
                    }
                </div>
               <Link to={"/auth/sent_reset_link"}>
                <p className="forgotPassword">Forgot
                 Password ?</p>

               </Link>
              
                <button className={loading ? "loading":""} type="submit" disabled={isSubmitting || !!(errors.email && touched.email) || !!(errors.password && touched.password)}>{loading ?  <iframe src="https://lottie.host/embed/001b9309-3a98-48c6-96d4-42b13cf1b412/eDDX84yAca.json"></iframe>:"Login"}</button>
            </form>
    
    </>

}






const Login = () => {
    const navigate =useNavigate()
    const {notify}=useAlert()
    const [isVerified,setIsVerified] = useState<boolean|null>(null)
    const dispatch =useDispatch()
    const {AddUserAction} = bindActionCreators(actionCreators,dispatch)
    const [loading,setLoading] = useState(false)
    const LoginForm = withFormik<myFormProps, formValues>({

    
   mapPropsToValues: (props: myFormProps) => ({
  email: props.initialEmail || '',
  password: props.initialPassword || '',
  confirmPassword: '',
  
}),
    validationSchema:Yup.object().shape({
        email:Yup.string().email("Email is not valid").required("Email is required"),
        password:Yup.string().min(8,"Password must be more than 8 characters").required("Password is required")
    }),
   handleSubmit: (registerValue: formValues, {}: any) => {
  handleLogin(registerValue);
},
  })(InnerForm as React.ComponentType<otherProps & FormikProps<formValues>>);



    const handleLogin=async(loginValue:formValues)=>{
        setLoading(true)
    try {

        const {status,data} = await  loginApi(loginValue);
        if(status===200){
            AddUserAction(data.message)
            navigate("/")
        }
        setLoading(false)
        
    } catch (error:any) {
        setLoading(false)
        if(error.response?.data?.isVerified===false){
            notify("This email is not verified","error")
            setIsVerified(false)
        }else{
            notify(error?.response?.data?.message,"error")
        }   
        console.log(error)
    }
}

    
  return (
    <LoginWrapper>
        <div className="loginContent">
            <div className="loginHeader">
                <img src="/images/logo.png" alt="logo" />
                <h3 className="headerText">Sign in to your account</h3>
            </div>
            <LoginForm  loading={loading}/>
            {
                isVerified ===false && <>
                   <Link to={"/auth/verifyEmail"}>
           <p className="goToText">Verify Email .</p>
           </Link> 
                </>
            }
           <Link to={"/auth/register"}>
           <p className="goToText">Don't have account ?</p>
           </Link> 
        </div>
    </LoginWrapper>
  )
}

export default Login
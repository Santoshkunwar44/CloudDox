import { Link, useNavigate } from 'react-router-dom'
import { RegisterWrapper } from './Register.styles'
import { FormikProps, withFormik } from 'formik'
import * as Yup from "yup"
import { registerApi } from '../../../api/Api'
import { useState } from 'react'

const Register = () => {

    const navigate=useNavigate()
    const [loading,setLoading] =useState(false)



interface formValues{
    username:string,
    email:string,
    password:string,
    confirmPassword:string, 
}


interface otherProps{
    // title:string,
    // ref:any 
    loading:boolean
}

interface myFormProps{
    initialEmail?:string,
    initialPassword?:string,
    initialUsername?:string,
    login?:any,
    loading:boolean
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
    }= props;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSubmit(e); // Manually call the formik handleSubmit function
  };

    return <>
 <form className="form" onSubmit={submitHandler}>
                <div className="formItem">
                    <label htmlFor="">username</label>
                    <input type="text" placeholder='john Doe' name='username' value={values.username} onBlur={handleBlur} onChange={handleChange}/>
                        {
                        touched.username && errors.username && (
                            <p className="invalidMessage">{errors.username}</p>
                        )
                    }
                </div>
                <div className="formItem">
                    <label htmlFor="">email</label>
                    <input type="email" placeholder='johnDoe98@gmail.com' name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                        {
                        touched.email && errors.email && (
                            <p className="invalidMessage">{errors.email}</p>
                        )
                    }
                </div>
                <div className="formItem">
                    <label htmlFor="">password</label>
                    <input type="password" placeholder='**********' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}/>
                        {
                        touched.password && errors.password && (
                            <p className="invalidMessage">{errors.password}</p>
                        )
                    }
                </div>
                <div className="formItem">
                    <label htmlFor="">confirm Password</label>
                    <input type="password" placeholder='**********' name='confirmPassword' value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange}/>
                        {
                        touched.confirmPassword && errors.confirmPassword && (
                            <p className="invalidMessage">{errors.confirmPassword}</p>
                        )
                    }
                </div>
                <button className={loading ? "loading":""} disabled={isSubmitting || !!(errors.email && touched.email) || !!(errors.password && touched.password) || !!(errors.username && touched.username) || !!(errors.confirmPassword && touched.confirmPassword)}  >{loading ? <iframe src="https://lottie.host/embed/001b9309-3a98-48c6-96d4-42b13cf1b412/eDDX84yAca.json"></iframe> :"Register"}</button>
            </form>
    </>

}




    const LoginForm= withFormik<myFormProps,formValues>(
    {
mapPropsToValues: (props: myFormProps) => ({
  email: props.initialEmail || '',
  password: props.initialPassword || '',
  username: props.initialUsername || '',
  confirmPassword: '',
}),

    validationSchema:Yup.object().shape({
        email:Yup.string().email("Email is not valid").required("Email is required"),
        password:Yup.string().min(8,"Password must be more than 8 characters").required("Password is required"),
        username:Yup.string().min(3,"Username must be more thatn 3  characters").required("Username is required"),
        confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
  .required('Confirm Password is required'),
    }),
   handleSubmit: (registerValue: formValues, {}: any) => {
  handleRegister(registerValue);
},

   })(InnerForm as React.ComponentType<otherProps & FormikProps<formValues>>);

    

const handleRegister=async(registerValue:formValues)=>{

    setLoading(true)

    try {
       const {status} =  await registerApi(registerValue)

       if(status===200){
        navigate("/info/email_sent?info=email_sent")
       }
        setLoading(false)
    } catch (error) {
        setLoading(false)
            console.log(error)
    }
    
}



  return (
    <RegisterWrapper>
        <div className="mainContent">
            <div className="contentHeader">
                <img src="/images/logo.png" alt="logo" />
                <h1 className='headerText'>Create  a new account </h1>
            </div>
        <LoginForm loading={loading}/>
          <Link to={"/auth/login"}>
           <p className='goTo'>Already have account ?</p>
          </Link> 
        </div>
    </RegisterWrapper>
  )
}

export default Register
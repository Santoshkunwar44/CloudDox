import { Link, useNavigate } from 'react-router-dom'
import { RegisterWrapper } from './Register.styles'
import { FormikProps, withFormik } from 'formik'
import * as Yup from "yup"
import { registerApi } from '../../../api/Api'

const Register = () => {

    const navigate=useNavigate()



interface formValues{
    username:string,
    email:string,
    password:string,
    confirmPassword:string, 
}

interface otherProps{
    title:string,
    ref:any 
}

interface myFormProps{
    initialEmail?:string,
    initialPassword?:string,
    initialUsername?:string,
    login?:any
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
        ref,
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
                <button disabled={isSubmitting || !!(errors.email && touched.email) || !!(errors.password && touched.password) || !!(errors.username && touched.username) || !!(errors.confirmPassword && touched.confirmPassword)}  className='submit'>Register</button>
            </form>
    </>

}




    const LoginForm= withFormik<myFormProps,formValues>(
    {
    mapPropsToValues:(props)=>({
        email:props.initialEmail,
        password:props.initialPassword,
    }),
    validationSchema:Yup.object().shape({
        email:Yup.string().email("Email is not valid").required("Email is required"),
        password:Yup.string().min(8,"Password must be more than 8 characters").required("Password is required"),
        username:Yup.string().min(6,"Username must be more thatn 6  characters").required("Username is required"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),

    }),
    handleSubmit(
        registerValue:formValues ,
        {props,setSubmitting,setErrors}:any 
        ){
            
            handleRegister(registerValue)
        }

    })(InnerForm)

    

const handleRegister=async(registerValue:formValues)=>{



    try {
       const {status} =  await registerApi(registerValue)
       if(status===200){
        navigate("/info/email_sent")
       }
        
    } catch (error) {
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
        <LoginForm/>
          <Link to={"/auth/login"}>
           <p className='goTo'>Already have account ?</p>
          </Link> 
        </div>
    </RegisterWrapper>
  )
}

export default Register
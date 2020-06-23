
import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
const SignUp = (
    values,
    field,
    errors,
    touched,
    handleBlur,
    isSubmitting
)=>(
    <Form>            
      <Field type='text' name='firstName' placeholder='First Name'/><br/><br/>
      <Field type='tetx' name='lastName' placeholder='Last Name'/><br/><br/>
      <div>
      {/* { touched.email && errors.email && <p>{errors.email}</p>} */}
      <Field type='email' name='email'  placeholder='Email' onBlur={handleBlur}/><br/><br/>
      </div>
      <Field type='password' name='password' placeholder='Password'/><br/> <br/>
      <label>
        <Field type='checkbox' name='newsletter' checked={values.newsletter}/>
        Join
      </label> <br/> <br/>
      <Field component='select' name='plan'>
        <option value='free'>Free</option>
        <option value='premium'>Premium</option>
      </Field> <br/><br/>
      <button type='submit' disabled={isSubmitting}>Submit</button>
            
    </Form>
)
    
const FormikApp = withFormik({
  mapPropsToValues(){
    return{
           firstName:'',
            lastName: '',
            email: '',
            password: '',
            newsletter: false,
            plan: 'free'
          }
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string()
              .email('Invalid email')
              .required('Required'),
            password: Yup.string()
              .min(5, 'Must be min 5 characters')
              .required('Required')        
        }),
        handleSubmit(values,{resetForm, setSubmitting, setErrors}){
           setTimeout(() => {
            if(values.email === 'kartikattri98@gmail.com'){
                setErrors('Email already taken')
            }else{
                resetForm()
                console.log(values)
            }
            setSubmitting(false)
           }, 2000);
        }
})(SignUp)

export default FormikApp
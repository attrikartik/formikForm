import React, { Component } from 'react'
import {Field,Form,Formik} from 'formik'
import * as Yup from 'yup'
import Table from './table'
const MyInput = ({field, form, ...props}) => {
    return <input {...field} {...props} />;
};
const MyTextArea = ({field, form, ...props}) => {
    return <textarea cols={30} rows={5} {...field} {...props} />;
};

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    password: Yup.string().min(5, 'Minimum length should be 5').required('Required'),
    country: Yup.string().required('Required'),
    terms: Yup.bool().oneOf([true], 'Required'),
    message: Yup.string().required('Required'),
})
class SignUpForm extends Component{
    state = {
        users: []
    }
    render(){
        const {users} =  this.state
        return(
            (
                <div>
                    <Formik
                        initialValues={{firstName:'',lastName: '',
                         email: '', password: '', 
                         country:'', terms: false, message: ''
                        }}
                        onSubmit={(values,{setSubmitting, resetForm})=>{
                            setTimeout(() => {
                                if(values.email === 'test@gmail.com'){
                                    alert('email exists')
                                }else{
                                    resetForm()
                                    const user = {
                                        firstName: values.firstName,
                                        lastName: values.lastName,
                                        email: values.email,
                                        country: values.country,
                                        message: values.message
                                    }
                                    let users = [...this.state.users]
                                    users.push(user)
                                    this.setState({ users})
                                }
                                setSubmitting(false)
                               }, 200);
                        }}
                        validationSchema={SignUpSchema}
                    >{({ errors, isSubmitting, touched})=>(
            
                            <Form>
                                
                            {/* {console.log(props)} */}
                           <Field type='text' name="firstName" placeholder="First Name" component={MyInput}/>
                            {errors.firstName && touched.firstName ?<p style={{color: 'red'}}>{errors.firstName}</p> : null
                            }<br/><br/>
                           <Field type='text' name='lastName' placeholder='Last Name' component={MyInput}/>
                            {
                                errors.lastName && touched.lastName ? <p style={{color: 'red'}}>{errors.lastName}</p> : null
                            }<br/><br/>
                           <Field name="email" placeholder="Email" component={MyInput}/>
                            {
                                errors.email && touched.email ? <p style={{color: 'red'}}>{errors.email}</p> : null
                            }<br/><br/>
                           <Field type='password' name='password' placeholder='Password' component={MyInput}/>
                            {
                                errors.password && touched.password ? <p style={{color: 'red'}}>{errors.password}</p> : null
                            }<br/><br/>
                            <label>Country &nbsp; &nbsp;</label>
                            <Field component='select' name='country'>
                               <option value='India'>India</option>
                               <option value='Germany'>Germany</option>
                            </Field>
                            {
                               errors.country && touched.country ? <p style={{color: 'red'}}>{errors.country}</p> : null
                            }<br/><br/>
                            <Field type='textarea' name='message' placeholder='Your message' component={MyTextArea}/>
                            {   
                                errors.message &&  touched.message ? <p style={{color: 'red'}}>{errors.message}</p> : null
                            }<br/><br/>
                            <label>
                            <Field type='checkbox' name='terms'/>
                             I Accept
                            </label>
                            {   
                                errors.terms &&  touched.terms ? <p style={{color: 'red'}}>{errors.terms}</p> : null
                            }<br/><br/>
                            <button type='submit'>{isSubmitting ? 'Submitting':'Submit'}</button>
            
                       </Form>
                    )}
                       
                    </Formik>
                    {
                        users.length > 0 ? <Table users={users}/>:null
                    }
                   
                </div>
            )
        )
    }
}


export default SignUpForm
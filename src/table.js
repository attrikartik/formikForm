import React from 'react'
import style from './form2.module.css'
const TableData = (props) =>{
  return (
      props.users.map((user,index)=>(
        <div className={style.UserDetails} key={index}>
        <table>
            <thead>
              <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Message</th>
               <th>Country</th>
               {/* <th>Gender</th> */}
              </tr>
            </thead>
            <tbody>
             <tr>
               <td>{user.firstName}</td>
               <td>{user.lastName}</td>
               <td>{user.email}</td>
               <td>{user.message}</td>
               <td>{user.country}</td>
               {/* <td>sasasas</td> */}
             </tr>
            </tbody>
    
        </table>
    </div>
      ))
  )
}

export default TableData
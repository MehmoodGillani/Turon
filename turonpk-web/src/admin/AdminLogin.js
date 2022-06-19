import React from 'react'
import "./AdminLogin.css"
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
    let navigate = useNavigate();
  return (
         <div className='app3'>
               <div className='login-form'>
               <div className="form">
                <form onSubmit={()=>{}}>
                    <div className="input-container">
                    <div style={{
                        color: "#2AA8D2",
                        textAlign: "center",
                        fontWeight:"bold",
                        fontSize: 16 
                        }}>Admin Login</div>    
                    <div style={{color: "#2AA8D2"}}>Email </div>
                    <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                    <div style={{color: "#2AA8D2"}}>Password </div>
                    <input type="password" name="pass" required />
                    </div>
                    <div style={{marginTop:20}}></div>
                    <div className="button-container">
                     <input type="submit" value="Login" onClick={()=>{
                          navigate("/adminHome")
                     }}/>
                    </div>
                    <div style={{marginTop:10}}></div>
                </form>
            </div>
               </div>
            </div>
  )
}

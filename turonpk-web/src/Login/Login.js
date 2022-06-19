import React,{useState,useEffect} from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { Footer } from '../Footer/Footer';
import { Slider } from '../Slider/Slider';

export const Login = () => {
    let navigate = useNavigate();
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [student, setStudent] = useState(true);
    const [teacher, setTeacher] = useState(false);

    useEffect(()=>{
        function Resize() {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener("resize",Resize)

        return ()=> window.removeEventListener("resize",Resize)
    },[window.innerWidth])

    console.log('width is',screenSize)
  return (
    <div className='main-home'>
    <div className='main-home-white'>
        <>
        <div className='main-home-header'>
            <div className='header-home-left'>
                <p className='mega-text'>Turonpk.com®</p>
                <p className='mini-text'>Best Tutors provider</p>
            </div>
            {
                screenSize > 800 ? (
            <div className='header-home-right'>
                <p className='textStyleHome' onClick={() => {
                    navigate("/");
                }}>Home</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/tutors");
                }}>Tutors</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/courses");
                }}>Courses</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/login");
                }}>Login/Signup</p>
            </div>
                ):<p onClick={()=> setIsMenuOpen((prev)=> !prev)}>Menu</p>
            }   
        </div>
        {
                isMenuOpen && screenSize < 800 ? (
            <div className="collapsed-menu-div">
                <p className='textStyleHome' onClick={() => {
                    navigate("/");
                }}>Home</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/tutors");
                }}>Tutors</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/courses");
                }}>Courses</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/login");
                }}>Login/Signup</p>
            </div>
                ):null
            }
            </>

        <div style={{width:'70vw'}}>
            {Slider()}
        </div>  

        <div className='app1'>
               <div className='login-form'>
               <div className="form">
                <form onSubmit={()=>{}}>
                    <div className="input-container">
                    <div style={{
                        color: "#2AA8D2",
                        textAlign: "center",
                        fontWeight:"bold",
                        fontSize: 16 
                        }}>Login</div>    
                    <div style={{color: "#2AA8D2"}}>Email </div>
                    <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                    <div style={{color: "#2AA8D2"}}>Password </div>
                    <input type="password" name="pass" required />
                    </div>
                    <div style={{marginTop:20}}></div>
                    <div style={{color: "#2AA8D2"}}>
                        <input type="radio" id="tutor" name='radio' value={teacher} checked={teacher} onChange={()=>{
                            setStudent(false)
                            setTeacher(true)
                        }}/>
                        {" "}Tutor {" "}
                        <input type="radio" id="student" name='radio' value={student} checked={student} onChange={()=>{
                            setStudent(true)
                            setTeacher(false)
                        }}/>
                        {" "} Student {" "}             
                    </div>
                    <div className="button-container">
                     <input type="submit" value="Login" onClick={()=>{
                         if(student === true){
                            navigate("/customerHome");
                         }
                         else if(teacher === true){
                            navigate("/tutorHome")
                         }
                         else{
                             console.log("select role")
                         }
                     }}/>
                    </div>
                    <div style={{marginTop:10}}></div>
                    <div style={{color: "#2AA8D2",textAlign:"center"}} onClick={
                        ()=>{
                            navigate("/signup");
                        }
                    }>Dont't have an account? Register</div>
                </form>
            </div>
               </div>
            </div>
        <div>
            {Footer()}
        </div>
    </div>
</div>
  )
}



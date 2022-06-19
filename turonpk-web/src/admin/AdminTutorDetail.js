import React,{useState,useEffect} from 'react'
import "./AdminTutorDetail.css"
import { useNavigate } from "react-router-dom";
import { Slider } from '../Slider/Slider'
import { Footer } from '../Footer/Footer'

export const AdminTutorDetail = () => {
  let navigate = useNavigate();
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                    navigate("/adminHome");
                }}>Home</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/admintutors");
                }}>Tutors</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/adminstudents");
                }}>Students</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/admincourses");
                }}>Courses</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/admin");
                }}>Logout</p>
            </div>
                ):<p onClick={()=> setIsMenuOpen((prev)=> !prev)}>Menu</p>
            }   
        </div>
        {
                isMenuOpen && screenSize < 800 ? (
            <div className="collapsed-menu-div">
                <p className='textStyleHome' onClick={() => {
                    navigate("/adminHome");
                }}>Home</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/admintutors");
                }}>Tutors</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/adminstudents");
                }}>Students</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/admincourses");
                }}>Courses</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/admin");
                }}>Logout</p>
            </div>
                ):null
            }
        </>

        <div style={{width:'70vw'}}>
            {Slider()}
        </div>  
        
        <div class="pannel7">
            <div style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 60,
                marginBottom: 30,
            }}>Physics</div>
            <div class="center" >
                <div class="profile">
                    <div class="profile-pic">
                        <center><img class="profilepic" src="https://www.w3schools.com/w3images/avatar2.png" alt="centered image"/></center>
                    </div>
                    <div class="info-Name"> <a href="">Name</a>
                    </div>
                    <div>
                        <div class="info-Ex"> <a href="">Qualification</a> </div>
                        <div class="info-Ex"> <a href=""> rating</a></div>
                    </div>
                </div>
            </div>
            <div class="center">
                 <h3 className='textStyle'>Introduction</h3>
            </div>
            <div class="center" style={{
                paddingLeft:55,
                paddingRight:55
            }}>
                 <div className='textStyle2'>A Tutor is an education professional who works with individual students to reach their academic goals. They are responsible for meeting with students to clarify and review concepts learned in class and help students solve specific problems.A Tutor is an education professional who works with individual students to reach their academic goals. They are responsible for meeting with students to clarify and review concepts learned in class and help students solve specific problems.A Tutor is an education professional who works with individual students to reach their academic goals. They are responsible for meeting with students to clarify and review concepts learned in class and help students solve specific problems.</div>
            </div>
            <div class="center">
                 <h3 className='textStyle'>Experiance</h3>
            </div>
            <div class="center">
                 <div className='textStyle2'>3 Years of Experiance</div>
            </div>
            <div class="center">
                 <h3 className='textStyle'>Status</h3>
            </div>
            <div class="center">
                 <div className='textStyle2'>Unemployed</div>
            </div>

            <div class="center">
                 <h3 className='textStyle'>Profile Video</h3>
            </div>
            <div class="center">
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/y881t8ilMyc" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
            </div>
            <div className='center' style={{
                marginTop:20
            }}>
            </div>
            
        </div>
       
       
        <div>
            {Footer()}
        </div>
    </div>
   </div>
  )
}

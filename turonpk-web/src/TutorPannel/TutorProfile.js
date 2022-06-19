import React,{useState,useEffect} from 'react'
import { Footer } from '../Footer/Footer'
import { Slider } from '../Slider/Slider'
import "./TutorProfile.css"

import { useNavigate } from "react-router-dom";

export const TutorProfile = () => {
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
                    navigate("/tutorHome");
                }}>Home</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/sendRequest");
                }}>SendRequest</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/studnets");
                }}>Students</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/tutorProfile");
                }}>Profile</p>
            </div>
                ):<p onClick={()=> setIsMenuOpen((prev)=> !prev)}>Menu</p>
            }   
        </div>
        {
                isMenuOpen && screenSize < 800 ? (
            <div className="collapsed-menu-div">
                <p className='textStyleHome' onClick={() => {
                    navigate("/tutorHome");
                }}>Home</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/sendRequest");
                }}>SendRequest</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/studnets");
                }}>Students</p>
                <p className='textStyleHome' onClick={() => {
                    navigate("/tutorProfile");
                }}>Profile</p>
            </div>
                ):null
            }
            </>

        <div style={{width:'70vw'}}>
            {Slider()}
        </div>  
  
        <div class="pannel1" style={{height: "1400px",marginTop:"50px"}}>
              <div style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: 24,
                  fontWeight: "bold",
                  marginTop: 60,
                  marginBottom: 30,
              }}>Profile</div>
              <div>
                  <div class="profile-pic">
                          <center><img class="profilepic" src="https://www.w3schools.com/w3images/avatar2.png" alt="centered image"/></center>
                      </div>
                      <div class="info-Name" style={{marginTop:"10px"}}> <a href="#">Name: Afnan Hassan</a>
                      </div>
                      <div>
                          <div class="info-Ex" style={{marginTop:"10px"}}> <a href="#"> Email: afnan@gmail.com</a></div>
                          <div class="info-Ex" style={{marginTop:"10px"}}> <a href="#">Qualification: Matric</a> </div>
                          <div class="info-Ex" style={{marginTop:"10px"}}> <a href="#"> Address: Karachi Pakistan</a></div>
                          <div class="info-Ex" style={{marginTop:"10px"}}> <a href="#"> Rating: 2.5k</a></div>
                          <div class="info-Ex" style={{marginTop:"10px"}}> <a href="#"> Introduction</a></div>
                          <div class="center" style={{
                                paddingLeft:55,
                                paddingRight:55
                            }}>
                                <div className='textStyle2'>A Tutor is an education professional who works with individual students to reach their academic goals. They are responsible for meeting with students to clarify and review concepts learned in class and help students solve specific problems.A Tutor is an education professional who works with individual students to reach their academic goals. They are responsible for meeting with students to clarify and review concepts learned in class and help students solve specific problems.A Tutor is an education professional who works with individual students to reach their academic goals. They are responsible for meeting with students to clarify and review concepts learned in class and help students solve specific problems.</div>
                            </div>
                            <div class="info-Ex" style={{marginTop:"10px"}}> <a href="#"> Experiance: 3 years</a></div>
                            <div class="info-Ex" style={{marginTop:"10px"}}> <a href="#"> Status: Unemployed</a></div> 
                            <div class="info-Ex" style={{marginTop:"10px"}}> <a href="#"> Profile Video</a></div>
                          <div style={{display:"flex", justifyContent:"center"}}>
                          <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/y881t8ilMyc" 
                                frameborder="0" 
                                allowfullscreen>
                            </iframe>
                          </div>
                          <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                            <button class="morebtn">Edit Details</button>
                            <div style={{marginLeft:"20px"}}></div>
                            <button class="morebtn">Logout</button>
                          </div> 
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
  
  
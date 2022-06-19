import React,{useState,useEffect} from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Slider } from '../Slider/Slider'
import './Courses.css'
import { useNavigate } from "react-router-dom";

export const Courses = () => {
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

        <div className='main-tutors1' style={{
            backgroundColor: "#384246",
            borderRadius: "20px",
        }}>
            <p className='titleColor'>All Courses</p>
            <div className='list-cards'>
            {[...Array(6)].map((each)=>{
                return(
                    <div class="grade">
                    <a href="/courseDetail"><label class="Label" for="grade">9<sup>th</sup> Grade </label></a>
      
                    <div class="subject-pannel1" onClick={()=>{
                        navigate("/courseDetail")
                    }}>
                        <div class="subject">
                            <a href="#">PHYSICS</a>
                        </div>
                        <div class="subject">
                            <a href="#">CHEMISTRY</a>
                        </div>
                        <div class="subject">
                            <a href="#">BIOLOGY</a>
                        </div>
                        <div class="subject">
                            <a href="#"> MATHS</a>
                        </div>
                        <div class="subject">
                            <a href="#">ENGLISH</a>
                        </div>
                        <div class="subject">
                            <a href="#">COMPUTER</a>
                        </div>
                        <div class="subject">
                            <a href="#">URDU</a>
                        </div>
                        <div class="subject">
                            <a href="#">PST</a>
                        </div>
                    </div>
    
                </div>
                )
            })}    
        
            </div>
            <div class="test-prep">
                <a href="/courseDetail"><label class="Label" for="grade">ENTRY TEST PREPRATION</label></a>

                <div class="test-pannel" onClick={()=>{navigate("/courseDetail")}}>

                    <div class="subject">
                        <a href="#">ECAT</a>
                    </div>
                    <div class="subject">
                        <a href="#">MDCAT</a>
                    </div>
                    <div class="subject">
                        <a href="#">NTS</a>
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


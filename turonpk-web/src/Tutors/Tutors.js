import React,{useState,useEffect} from 'react'
import "./Tutors.css"
import { Slider } from '../Slider/Slider'

import { useNavigate } from "react-router-dom";

import facebook from "../images/facebook.png"
import google from "../images/google.png"
import instagram from "../images/instagram.png"
import linkdin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import github from "../images/yt.png"
import { Footer } from '../Footer/Footer'

export const Tutors = () => {
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

        <div className='main-tutors'>
            <p className='titleColor'>All Tutors</p>
            <div className='list-cards'>
            {[...Array(6)].map((each)=>{
                return(
                    <div class="profile">
            <div class="profile-pic">
                <center><img class="profilepic" src="https://www.w3schools.com/w3images/avatar2.png" alt="centered image"/></center>
            </div>
            <div class="info-Name"> <a href="/tutorDetail">Name</a>
            </div>
            <div>
                <div class="info-Ex"> <a href="/tutorDetail">Qualification</a> </div>
                <div class="info-Ex"> <a href="/tutorDetail"> rating</a></div>
            </div>
        </div>
                )
            })}    
            
            </div>
        </div> 
        <div>
          <button class="morebtn">More</button>
        </div> 

        <div>
            {Footer()}
        </div>
    </div>
</div>
  )
}

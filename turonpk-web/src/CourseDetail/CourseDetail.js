import React,{useState,useEffect} from 'react'

import { useNavigate } from "react-router-dom";
import { Footer } from '../Footer/Footer'
import { Slider } from '../Slider/Slider'

import "./CourseDetail.css"


export const CourseDetail = () => {
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
          <button class="morebtn" onClick={()=>{
              navigate("/login")
          }} style={{ cursor:'pointer' }}>Submit to all</button>
        </div> 

        <div>
            {Footer()}
        </div>
    </div>
</div>
  )
}

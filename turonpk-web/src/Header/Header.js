import React,{useState,useEffect} from 'react'
import "./Header.css"


export const Header = () => {
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
    <>
    <div className='main-home-header'>
        <div className='header-home-left'>
            <p className='mega-text'>Turonpk.com®</p>
            <p className='mini-text'>Best Tutors provider</p>
        </div>
        {
            screenSize > 800 ? (
        <div className='header-home-right'>
            <p className='textStyleHome'>Home</p>
            <p className='textStyleHome'>Tutors</p>
            <p className='textStyleHome'>Courses</p>
            <p className='textStyleHome'>Login/Signup</p>
        </div>
            ):<p onClick={()=> setIsMenuOpen((prev)=> !prev)}>Menu</p>
        }

        
    
    </div>
    {
            isMenuOpen && screenSize < 800 ? (
        <div className="collapsed-menu-div">
            <p className='textStyleHome'>Home</p>
            <p className='textStyleHome'>Tutors</p>
            <p className='textStyleHome'>Courses</p>
            <p className='textStyleHome'>Login/Signup</p>
        </div>
            ):null
        }
        </>
  )
}

import React,{useState,useEffect} from 'react'
import "./AdminHome.css"
import { useNavigate } from "react-router-dom";
import { Slider } from '../Slider/Slider'
import { Footer } from '../Footer/Footer'

export const AdminHome = () => {
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
        <div style={{textAlign:"center",fontSize:22,fontWeight:700,marginTop:20,marginBottom:20}}>Tutor Requests</div>
        <div style={{
            display:"flex",
            width:"50%",
            overflowX:"auto",
        }}>
            <table>
                <tr>
                <th>Name</th>
                <th>Qualification</th>
                <th>Experiance</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
                {
                    [...Array(6)].map((each) => {
                        return (<tr style={{
                            cursor:"pointer"
                          }} onClick={()=>{
                            navigate("/admintutordetail");
                          }}>
                        <td>Ali</td>
                        <td>Matric</td>
                        <td>3 years</td>
                        <td>Unemployed</td>
                        <td style={{display:"flex"}}>
                            <div style={{display: "flex",justifyContent:"center"}}>
                                 <button class="morebtn" style={{backgroundColor:"Green"}}>Accept</button>
                            </div>
                            <div style={{width:20}}></div>
                            <div style={{display: "flex",justifyContent:"center"}}>
                                 <button class="morebtn" style={{backgroundColor:"Red"}}>Reject</button>
                            </div>
                        </td>
                        </tr>);
                    })
                }
            </table>
        </div>

       
        <div>
            {Footer()}
        </div>
    </div>
   </div>
  )
}

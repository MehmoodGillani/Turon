import React from 'react'
import "../Home/HomePage.css"

export const CustomerHeader = () => {
  return (
    <div id="header">
        <div id="logo">
            <h1>Turonpk.com<sup style={{fontSize: 16}}>&reg;</sup> <p style={{fontSize: 11}}>Best Tutors provider</p></h1>    
        </div>
        <div id="menu">
            <ul>
                <li><a href="/customerHome">Home</a></li>
                <li><a href="/customerRequest">Requests</a></li>
                <li><a href="/customerTutors">Tutors</a></li>
                <li><a href="/customerProfile">Profile</a></li>
                <li hidden><a href="#">sign Up</a></li>

            </ul>
        </div>
   </div>
  )
}

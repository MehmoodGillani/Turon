import React from 'react'
import pic1 from "../images/tutorhome1.jpg"
import pic2 from "../images/tutorhome2.jpg"
import pic3 from "../images/tutorhome3.jpg"
import pic4 from "../images/tutorhome4.jpg"
import pic5 from "../images/tutorhome5.jpg"
import "./Slider.css"

export const Slider = () => {
  return (
    <div id="slider">
        <figure>
            <img src={pic1} width="1100" height="400" />
            <img src={pic2} width="1100" height="400" />
            <img src={pic3} width="1100" height="400" />
            <img src={pic4} width="1100" height="400" />
            <img src={pic5} width="1100" height="400" />
        </figure>
    </div>
  )
}

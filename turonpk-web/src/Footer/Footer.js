import React from 'react'
import "../Footer/Footer.css"

export const Footer = () => {
  return (
    <div class="footer-distributed">
                <div class="footer-left">
                    <h3>About</h3>
                    <h3>Turonpk</h3>
                    <p class="footer-links">
                        <a href="/">Home</a>
                        <a href="/tutors">Tutors</a>
                        <a href="/courses">Courses</a>
                        <a href="/login">Login</a>
                    </p>

                    <p class="footer-company-name">©2022 Turonpk Learning Solutions Pvt. Ltd.</p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>309 - Rupa Solitaire,
                            Bldg. No. A - 1, Sector - 1</span>
                            Mahape, Navi Mumbai - 400710</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+91 22-27782183</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@eduonix.com">support@Turonpk.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the Turonpk</span>
                        We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
                    <div class="footer-icons">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                    </div>
                </div>
                </div>
  )
}

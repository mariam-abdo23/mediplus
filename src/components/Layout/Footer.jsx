import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import React from 'react'

export default function Footer() {
    return <>
        <div className="footer">
            <div className='mt-5 '>
                <div className="row m-5 mb-0 gap-5 ">
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <h4 className='mt-5 fw-bold'>
                            Mediplus
                        </h4>
                        <p className='text-secondary mt-4 fs-5 '>

                            Far far away, behind the word mountains, far from the countries.</p>
                        <div className='m-5 '></div>
                        <a href="#"> <FontAwesomeIcon icon={faTwitter} size='2xl' className='text-primary pe-3' /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} size='2xl' className='text-primary pe-3' /></a>
                        <a href="#"> <FontAwesomeIcon icon={faInstagram} size='2xl' className='text-primary pe-3' /></a>
                    </div>

                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <h4 className='mt-5 fw-bold'>Department</h4>
                        <ul className='mt-4 list-unstyled'>
                            <li className='mt-4'><a className=' fs-5 fw-bold text-decoration-none' href="#">Neurology</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Opthalmology</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Nuclear Magnetic</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Surgical</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Cardiology</a></li>
                            <li className='mt-4'><a className='fs-5  fw-bold text-decoration-none' href="#">Dental</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <h4 className='mt-5 fw-bold'>Department</h4>
                        <ul className='mt-4 list-unstyled'>
                            <li className='mt-4'><a className=' fs-5 fw-bold text-decoration-none' href="#">Home</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">About</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Departsment</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Doctors</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Blog</a></li>
                            <li className='mt-4'><a className='fs-5  fw-bold text-decoration-none' href="#">Pricing</a></li>
                            <li className='mt-4'><a className='fs-5  fw-bold text-decoration-none' href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <h4 className='mt-5 fw-bold'>Services</h4>
                        <ul className='mt-4 list-unstyled'>
                            <li className='mt-4'><a className=' fs-5 fw-bold text-decoration-none ' href="#">Emergency Services</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Qualified Doctors</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">Outdoors Checkup</a></li>
                            <li className='mt-4'><a className='fs-5 fw-bold text-decoration-none' href="#">24 Hours Services</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <h4 className='mt-5 fw-bold'>Have a Questions?</h4>
                        <ul className='mt-4 list-unstyled'>
                            <li><a className='text-dark text-decoration-none' href="#"><FontAwesomeIcon className='pe-2 mt-4' icon={faMap} /> 203 Fake St. Mountain View, San Francisco, California, USA</a></li>
                            <li><a className='fs-5 text-decoration-none' href="tel:+2 392 3929 210"> <FontAwesomeIcon icon={faPhone} className='pe-3 mt-4' />+2 392 3929 210</a></li>
                            <li><a className='fs-5 fw-bold text-decoration-none' href="mailto:someone@example.com"><FontAwesomeIcon icon={faEnvelope} className='pe-3 mt-4' />	info@yourdomain.com</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 fs-5">
                  <p className='pb-5'>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
                </div>
        </div>
    </>
}

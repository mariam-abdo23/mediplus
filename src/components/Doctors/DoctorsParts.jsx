import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function DoctorsParts({img ,title ,doc}) {
  return <>
<div className="col-lg-3 col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-center">
    <div className='overlayDoctor'>
        <img src={img} style={{width:"40vh"}} alt="Doctors" />
        <div className='icons'>
            <a href=""> <FontAwesomeIcon className='text-danger' size='xl' icon={faTwitter}/> </a>
            <a href=""> <FontAwesomeIcon className='text-danger' size='xl' icon={faFacebook}/> </a>
            <a href=""> <FontAwesomeIcon className='text-danger' size='xl' icon={faGoogle}/> </a>
            <a href=""> <FontAwesomeIcon className='text-danger' size='xl' icon={faInstagram}/> </a>
        </div>
    </div>
    <h4 className="lay mt-4 text-center">{title}</h4>
    <p className='text-primary fw-bold' style={{letterSpacing:"4px"}}>{doc}</p>
    <p className='text-secondary text-center fs-5' style={{wordSpacing:"3px"}}> I am an ambitious workaholic, but <br />  apart from that, pretty simple person.</p>
    <button type="button" class="btn btn-primary rounded-pill mt-4 fs-5">Book now</button>
</div>
          
  </>
}

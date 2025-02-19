import React, { useState } from 'react'
import PartsContact from './PartsContact'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  const [YourName, setYourName] = useState('');
  const [YourEmail, setYourEmail] = useState('');
  const [Object, setObject] = useState('');
  const [YourMessage, setYourMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const handleYourName = (e) => {
    setYourName(e.target.value)
  }

  const handleYourEmail = (e) => {
    setYourEmail(e.target.value)
  }

  const handleObject = (e) => {
    setObject(e.target.value)
  }

  const handleMessage = (e) => {
    setYourMessage(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const error = [];

    if (YourName === '') {
      error.push({
        element: 'Your Name',
        message: 'Required field'
      })
    } else if (YourName.length < 3) {
      error.push({
        element: 'Your Name',
        message: 'This field must be greater than 2 chracter'
      })
    }
    if (YourEmail === '') {
      error.push({
        element: 'Your Email',
        message: 'Required field'
      })
    } else if (YourEmail.length < 5) {
      error.push({
        element: 'Your Email',
        message: 'Required field'
      })
    }

    if (Object === '') {
      error.push({
        element: 'Object',
        message: 'Required field'
      })
    } else if (Object.length < 3) {
      error.push({
        element: 'Object',
        message: 'Required field'
      })
    }
    if (YourMessage === '') {
      error.push({
        element: 'Your Message',
        message: 'Required field'
      })
    } else if (YourMessage.length < 3) {
      error.push({
        element: 'Your Message',
        message: 'Required field'
      })
    }
    setErrors(error);
  }



  return <>
    <div className="container">
      <div className='text-center mt-5 fw-bold'>
        <h2 className='fs-1'>Contact US</h2>
        <p className='text-secondary mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

      </div>
    </div>

    <div className="container">
      <div className="row">
        <PartsContact icon={faAddressCard} title="Address" desc="198 West 21th Street" />
        <PartsContact icon={faPhone} title='Contact Number' desc="+ 1235 2355 98" />
        <PartsContact icon={faTelegram} title='Email Address' desc="info@yoursite.com" />
        <PartsContact icon={faEarthAmericas} title='Website' desc="yoursite.com" />
      </div>
    </div>
    <br />

    <div className="container">
      <form onSubmit={handleFormSubmit} className='needs-validation d-flex flex-column mx-auto w-100 m-5 p-5 bg-light' novalidate>
        <input type="text" className="form-control  p-3 mt-5" placeholder='Your Name' id="validationCustom01" value={YourName} onChange={handleYourName} />
        <div className='text-danger'>
          {errors && errors.map((error) => error.element === 'Your Name' ? error.message : null)}
        </div>
        <input type="email" className="form-control  p-3 mt-5" placeholder='Your Email' id="validationCustom02" value={YourEmail} onChange={handleYourEmail} />
        <div className='text-danger'>
          {errors && errors.map((error) => error.element === 'Your Email' ? error.message : null)}
        </div>
        <input type="text" className="form-control  p-3 mt-5" placeholder='Object' id="validationCustom03" value={Object} onChange={handleObject} />
        <div className='text-danger'>
          {errors && errors.map((error) => error.element === 'Object' ? error.message : null)}
        </div>
        <textarea className="form-control  p-3 mt-4" placeholder="Your Message" rows="4" value={YourMessage} onChange={handleMessage}></textarea>
        <div className='text-danger'>
          {errors && errors.map((error) => error.element === 'Your Message' ? error.message : null)}
        </div>
        <button type="submit" class="btn btn-outline-danger w-50 mt-5">Send Massage</button>
      </form>
    </div>
    <br />

  </>
}

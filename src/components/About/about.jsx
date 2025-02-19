import React, { useState } from 'react';
import AboutImage from './../../images/about.jpg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMedical, faUserDoctor, faStethoscope, faClock } from '@fortawesome/free-solid-svg-icons';
import Parts from './Parts';

export default function About() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectService, setSelectService] = useState('');
  const [phone, setPhone] = useState('');
  const [yourMessage, setYourMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!firstName) newErrors.firstName = 'Required field';
    else if (firstName.length < 3) newErrors.firstName = 'Must be greater than 2 characters';

    if (!lastName) newErrors.lastName = 'Required field';
    else if (lastName.length < 3) newErrors.lastName = 'Must be greater than 2 characters';

    if (!selectService) newErrors.selectService = 'Required field';

    if (!phone) newErrors.phone = 'Required field';
    else if (phone.length < 11) newErrors.phone = 'Must be 11 digits or more';

    if (!yourMessage) newErrors.yourMessage = 'Required field';
    else if (yourMessage.length < 5) newErrors.yourMessage = 'Must be greater than 5 characters';

    setErrors(newErrors);
  };

  return (
    <div className="container" id="About">
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <img src={AboutImage} className="w-75" alt="About" />
        </div>
        <div className="col-lg-7 col-md-12">
          <h2 className="fw-bold fs-1">
            We Are <span className="text-primary">Mediplus</span> A <br /> Medical Clinic
          </h2>
          <p className="text-secondary fs-5 mt-5" style={{ wordSpacing: "4px" }}>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <div className="d-flex m-5">
            <button type="button" className="btn btn-primary rounded-pill p-2">Make an appointment</button>
            <button type="button" className="btn btn-outline-danger rounded-pill p-2 ms-3">Contact Us</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-5">
            <h2 className="fw-bold" style={{ fontSize: "60px" }}>Our Services</h2>
            <div className="row">
              <Parts title="Emergency Services" icon={<FontAwesomeIcon icon={faTruckMedical} size="2xl" />} />
              <Parts title="Qualified Doctors" icon={<FontAwesomeIcon icon={faUserDoctor} size="2xl" />} />
              <Parts title="Outdoors Checkup" icon={<FontAwesomeIcon icon={faStethoscope} size="2xl" />} />
              <Parts title="24 Hours Service" icon={<FontAwesomeIcon icon={faClock} size="2xl" />} />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-5">
            <div className="bg-light p-4 rounded">
              <h5 className="text-primary text-center">Free Consultation</h5>
              <form onSubmit={handleFormSubmit} className="d-flex flex-column mx-auto w-75">
                <input type="text" className="form-control my-2" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <span className="text-danger">{errors.firstName}</span>}

                <input type="text" className="form-control my-2" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <span className="text-danger">{errors.lastName}</span>}

                <select className="form-select my-2" value={selectService} onChange={(e) => setSelectService(e.target.value)}>
                  <option value="">Select Your Service</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dental">Dental</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Other">Other Service</option>
                </select>
                {errors.selectService && <span className="text-danger">{errors.selectService}</span>}

                <input type="text" className="form-control my-2" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                {errors.phone && <span className="text-danger">{errors.phone}</span>}

                <input type="datetime-local" className="form-control my-2" />

                <textarea className="form-control my-2" placeholder="Your Message" rows="2" value={yourMessage} onChange={(e) => setYourMessage(e.target.value)}></textarea>
                {errors.yourMessage && <span className="text-danger">{errors.yourMessage}</span>}

                <button type="submit" className="btn btn-danger rounded-pill mt-3">Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="overlay">
          <div className="container text-center text-light">
            <h2>Your Health is Our Priority</h2>
            <p>We can manage your dream building. A small river named Duden flows by their place.</p>
            <button className="btn btn-light rounded-pill p-3">Search Places</button>
          </div>
        </div>
      </div>
    </div>
  );
}
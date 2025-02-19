import React from 'react'
import Doctor1 from "./../../images/doc-1.jpg.webp"
import Doctor2 from "./../../images/doc-2.jpg.webp"
import Doctor3 from "./../../images/doc-3.jpg.webp"
import Doctor4 from "./../../images/doc-4.jpg.webp"
import DoctorsParts from './DoctorsParts'
export default function doctors() {
  return <>
  <div className="container mt-5" id='Doctors'>
    <div className="text-center">
        <h3 className='fw-bold pt-5' style={{fontSize:'40px', wordSpacing:'2px'}}>
        Our Qualified Doctors
        </h3>
        <p className='text-secondary fs-5 mt-4' style={{wordSpacing:"3px"}}>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
    </div>
  </div>
<br />
<div className="m-5">
<div className="row gy-5">
       <DoctorsParts img={Doctor1} title="Dr. Lloyd Wilson" doc="NEYROIOGIST"/>
       <DoctorsParts img={Doctor2} title="Dr. Rachel Parker" doc='OPHTHALMOLOGIST'/>
       <DoctorsParts img={Doctor3} title="Dr. Ian Smith" doc="DENTIST"/>
       <DoctorsParts img={Doctor4} title="Dr. Alicia Henderson" doc="PEDIATRICIAN"/>
</div>
</div>
<br />



    

  </>
}

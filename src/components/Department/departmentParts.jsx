import React from 'react'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function DepartmentParts({ title, desc }) {
  return <>
   <div className='col-lg-4 col-md-12 col-sm-12 '>
   <div className='department border text-center p-5'>
      <span className='text-primary'><FontAwesomeIcon icon={faStethoscope} size='2xl' /></span>
      <h4 className='mt-4'>{title}</h4>
      <p className=' text-secondary'>{desc}</p>
    </div>
   </div>
    
  </>
}

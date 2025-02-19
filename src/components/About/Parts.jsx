import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons'
export default function Parts({icon,title,des}) {

    

  return <>
  <div className="col-lg-6 col-md-12 col-sm-12">
   <div className='d-flex'>
    <div className='mt-5'>
    <span className='border border-danger-subtle border-2 rounded-circle p-3 m-3' style={{color:"tomato"}}>{icon} </span>
    </div>
      
     <div className='mt-4'>
     <h4>{title}</h4>
      <p className='text-secondary lh-lg'style={{wordSpacing:'3px'}}> {des}  </p>
     </div>
    </div>
    </div>
  </>
}

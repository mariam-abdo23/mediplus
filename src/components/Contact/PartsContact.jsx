import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


export default function PartsContact ({icon,title,desc, mt}) {
  return <>
<div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card bg-light border-0 text-center m-5 p-5">
              <FontAwesomeIcon className='text-primary' icon={icon} size='2xl'/>
                <h6 className='mt-3'>{title}</h6>
             <p className='text-secondary mt-3' >{desc}</p>
            </div>
        </div>  
  </>
}

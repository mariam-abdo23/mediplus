import React from 'react'
import DepartmentImage from './../../images/dept-1.jpg.webp'
import Dps from './Dps'
export default function Department() {
  return <>
<div className='overflow-x-hidden' id='Department'>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 " >
                    <img src={DepartmentImage} style={{ maxWidth: "70vh", height: "76vh" }} alt="department" />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className='row'>
                        <Dps title="Neurology" desc="Far far away, behind the word mountains" />
                        <Dps title="Opthalmology" desc="Far far away, behind the word mountains" />
                        <Dps title="Nuclear Magneticlogy" desc="Far far away, behind the word mountains" />
                        <Dps title="Surgical" desc="Far far away, behind the word mountains" />
                        <Dps title="Cardiology" desc="Far far away, behind the word mountains" />
                        <Dps title="X-ray" desc="Far far away, behind the word mountains" />
                        <Dps title="Dental" desc="Far far away, behind the word mountains" />
                        <Dps title="Traumatology" desc="Far far away, behind the word mountains" />
                        <Dps title="Cardiology" desc="Far far away, behind the word mountains" />
                        
                    </div>
                </div>
            </div>
        </div>
        <br />
  </>
}

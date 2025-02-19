import React from 'react'
import Department from './../../images/dept-1.jpg.webp'
import DepartmentParts from './DepartmentParts'

export default function Department() {
    return <>
        <div className='overflow-x-hidden' id='Department'>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 " >
                    <img src={Department} style={{ maxWidth: "70vh", height: "76vh" }} alt="department" />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className='row'>
                        <DepartmentParts title="Neurology" desc="Far far away, behind the word mountains" />
                        <DepartmentParts title="Opthalmology" desc="Far far away, behind the word mountains" />
                        <DepartmentParts title="Nuclear Magneticlogy" desc="Far far away, behind the word mountains" />
                        <DepartmentParts title="Surgical" desc="Far far away, behind the word mountains" />
                        <DepartmentParts title="Cardiology" desc="Far far away, behind the word mountains" />
                        <DepartmentParts title="X-ray" desc="Far far away, behind the word mountains" />
                        <DepartmentParts title="Dental" desc="Far far away, behind the word mountains" />
                        <DepartmentParts title="Traumatology" desc="Far far away, behind the word mountains" />
                        <DepartmentParts title="Cardiology" desc="Far far away, behind the word mountains" />
                    </div>
                </div>
            </div>
        </div>
        <br />
    </>
}

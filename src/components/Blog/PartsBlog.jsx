import React from 'react'

export default function PartsBlog({imge}) {
  return <>

   <div className="col-lg-4 col-md-12 col-sm-12 ">
             
  <img src={imge} style={{width:'40vh'}} alt="img" />
  <div className='mt-3' style={{wordSpacing:"4px"}}>
    <h4 className='mb-4' >Scary Thing That You Don’t Get Enough Sleep</h4>
    <p className='text-secondary  m-2 fs-5' style={{wordSpacing:"3px"}}> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <button type="button" className="btn btn-primary rounded-pill fs-5 m-3">Read More</button>
  </div>
  </div>
  
  </>
}

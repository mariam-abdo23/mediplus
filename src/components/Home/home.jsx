import React from 'react'

export default function home() {
    return <>
        <div className='home' id='Home'>
            <div className='container welcome'>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className='text-primary'>Welcome to Mediplus</p>
                        <h1 className='fw-bold lh-1' style={{ fontSize: "60px", color: "black" }}>We are here <br />
                            for your Care</h1>
                            <p className='text-secondary fs-5 mt-5 lh-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <button type="button" class="btn btn-primary rounded-pill p-3">Make an appointment</button>
                    </div>
                </div>

            </div>
        </div>
    </>
}

import React from 'react'


export default function ParralaxComponent() {
    const parralax = {
        backgroundImage: 'url(/assets/images/traffic.jpg)',
        height: '200px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: '-300px',
    }
    return (
        <div className='d-none d-md-block'>
            <div style={parralax}>
            <div class="paraBig ml-4 header">
                <h1 style={{fontSize:'7em'}} className="text-white text-sm-left">Easily Describe</h1>
                <h2 style={{fontSize:'3em'}} className="text-white text-sm-left ml-5">all your vehicle noise concerns</h2>
            </div>  
            </div>
        </div>
    )
}


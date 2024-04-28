import React from 'react'

const Banner = () => {
  return (
<div className='container-fluid'>
  <div className='row justify-content-between'>
    <div className='col-md-6 d-flex align-items-center'>
      <div className='m-1'>
        <h1>Hello World</h1>
        <h3>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</h3>
        <div className='d-flex'>
          <button className='btn btn-light btn-lg me-2'>Read More</button>
          <button className='btn btn-dark btn-lg'>Click Me</button>
        </div>
      </div>
    </div>
    <div className='col-md-5 d-flex justify-content-center'>
      <img src="/assets/images/magic.png" style={{width: "50%"}} alt='banner image' />
    </div>
  </div>
</div>

  )
}

export default Banner

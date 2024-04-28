import React, { useState } from 'react'

const Header = () => {
const [toggle , setToggle ] = useState(false);
function handleToggle () {
  setToggle((prev) => !prev);
}
  return (
    <div className='w-full'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" dataToggle="collapse" onClick={handleToggle} dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={`collapse navbar-collapse d-flex justify-content-center ${toggle ? 'd-none' : ''}`} id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header

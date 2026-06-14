import React from 'react'

function Debug() {
  return (

 <>
<div className="shadow p-3 mb-5 bg-body-tertiary rounded">

    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="https://www.rahatyad.ir/">
      <img className='w-25' src="https://www.rahatyad.ir/images/rahatyad_logo.svg" alt="" />

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-primary" aria-current="page" href="https://www.rahatyad.ir/index.php">صفحه نخست</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark " href="https://www.rahatyad.ir/project.php">پروژه</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-dark " href="https://www.rahatyad.ir/package.php" >
            دوره ها
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-dark" href="https://www.atronsoft.ir/blog" >
            بلاگ
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-dark hover:text-red" href="http://rahatyad.ir/about-us.php" >
            درباره ما
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="چی میخوای یاد بگیری؟" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</nav>

</div>

    </>

)
}

export default Debug
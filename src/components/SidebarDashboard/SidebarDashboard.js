import React from 'react'

const SidebarDashboard = () => {
  return (
    <div className='content-fluid' style={{ height: "82vh", backgroundColor: "white", padding:"0 30px" }}>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  )
}

export default SidebarDashboard
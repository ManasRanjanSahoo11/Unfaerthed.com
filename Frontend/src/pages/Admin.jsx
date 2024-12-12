import React from 'react'
import Admin__Sidebar from '../components/Admin__Sidebar'
import Admin__Topbar from '../components/Admin__Topbar'
import Admin_Dashboard from '../components/Admin_Dashboard'

function Admin() {
  return (
    <div className='flex '>
      <Admin__Sidebar/>
      <div className='w-[100%]'>
        <Admin__Topbar/>
        <main>
            <Admin_Dashboard/>
        </main>
      </div>
    </div>
  )
}

export default Admin

import React from 'react'
import DashboardBox from './components/DashboardBox'

const Dashboard = () => {
  return (
    <>

        <div className='right-content w-100'>
          
          <div className='row dashboardBoxWrapperRow'>
            <div className='col-md-9'>
              <div className='dashboardBoxWrapper d-flex'>

                <DashboardBox/>
                <DashboardBox/>
                <DashboardBox/>
                <DashboardBox/>
                <DashboardBox/>
                <DashboardBox/>
          
              </div>
            </div>

            <div className='col-md-3 pl-0'>
              <div className='box'>
                <div className='dashboardBoxRight'></div>
                <div className='dashboardBoxRight'></div>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default Dashboard
import React from 'react'
import Header from '../../componnets/partials/profile/header'
import SlidersMenus from '../../componnets/partials/profile/slidersMenus'
import Activities from '../../shared/Actvies'
import Posts from '../home/Posts'
export default function index() {
  return (
    <div className='mt-4'>
    <div>
    <Header/>
    <SlidersMenus/>
     <div className="flex mt-5">
            <div className="lg:w-[70%]   w-full">
              <Posts/>
            </div>
            <div className="w-[30%] p-4 lg:flex hidden">
              <Activities />
            </div>
          </div>
    </div>
    </div>
  )
}

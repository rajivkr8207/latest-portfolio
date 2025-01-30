import React from 'react'
import Profile from '../Components/Profile'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const Main = () => {
  const fadeupanimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration:
      1.5 } },
  }
  return (
    <>
    <div className=' flex justify-start lg:flex-row flex-col gap-20 lg:mx-[6rem] '>
        <div className='lg:w-[23rem] w-full lg:flex justify-start  lg:mx-3 hidden'>
            <Profile/>
        </div>
        <div className='lg:w-[40rem] w-full  lg:mt-3'>
            <Outlet />
        </div>
    </div>
    </>
  )
}

export default Main

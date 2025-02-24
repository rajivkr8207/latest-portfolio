import Profile from '../Components/Profile'
import { Outlet } from 'react-router-dom'

const Main = () => {
 
  
  return (
    <>
    <div className=' flex justify-start lg:flex-row flex-col gap-20 lg:mx-[6rem] '>
        <div className='lg:w-[23rem] w-full  lg:flex flex-col justify-start  lg:mx-3 hidden '>
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

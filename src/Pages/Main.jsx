import Profile from "../Components/Profile";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <main >
       <div className=" flex justify-around lg:flex-row flex-col gap-20 lg:mx-[6rem] mx-auto ">
         <div className="lg:w-[40vw] w-full relative  lg:flex flex-col justify-center items-center    lg:mx-3 hidden ">
          <Profile />
        </div>
        <div className="lg:w-[100%]  w-full p-5  lg:mt-3  ">
          <Outlet />
        </div>
       </div>
      </main>
    </>
  );
};

export default Main;

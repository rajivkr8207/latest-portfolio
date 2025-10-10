import Profile from "../Components/Profile";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <div className=" flex justify-around lg:flex-row flex-col gap-20 lg:mx-[6rem] ">
        <div className="lg:w-[40vw] w-full  lg:flex flex-col justify-center items-center    lg:mx-3 hidden ">
          <Profile />
        </div>
        <div className="lg:w-[60vw]  w-full lg:p-10 lg:mt-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;

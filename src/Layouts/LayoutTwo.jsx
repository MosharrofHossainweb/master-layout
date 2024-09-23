import { Outlet } from "react-router-dom";
import Navbar2 from "../Component/Navbar2";

const LayoutTwo = () => {
  return (
    <>
    <div className="flex">
      <Outlet />
      <Navbar2 />

    </div>
    </>
  );
};

export default LayoutTwo;

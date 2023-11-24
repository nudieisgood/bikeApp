import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SmallNavModal from "../components/SmallNavModal";
import { useState } from "react";

const HomeLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative">
      {showModal && (
        <SmallNavModal showModal={showModal} toggleModal={toggleModal} />
      )}
      <div className="max-w-[1440px] mx-auto">
        <Navbar showModal={showModal} toggleModal={toggleModal} />
      </div>
      <div className="border-b mb-6"></div>
      <div className="max-w-[1440px] mx-auto px-6">
        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;

import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const SmallNavModal = ({ showModal, toggleModal }) => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-10">
        <Navbar showModal={showModal} toggleModal={toggleModal} />
      </div>
      <div className="fixed h-[90%] w-screen bg-primary z-50 px-6 py-6">
        <div className="flex flex-col justify-between h-full">
          <nav className="flex flex-col gap-6 text-xl text-white hover:#606c38">
            <NavLink
              end
              className="flex gap-1 transition ease-in-out delay-100 hover:text-[#606c38]"
              to="how-to-use"
              onClick={() => {
                toggleModal();
              }}
            >
              <p>使用說明</p>
            </NavLink>
            <NavLink
              className="flex gap-1 transition ease-in-out delay-100 hover:text-[#606c38]"
              to="terms-fee"
              onClick={() => {
                toggleModal();
              }}
            >
              <p>收費方式</p>
            </NavLink>
            <NavLink
              className="flex gap-1 transition ease-in-out delay-100 hover:text-[#606c38]"
              to="information"
              onClick={() => {
                toggleModal();
              }}
            >
              <p>站點資訊</p>
            </NavLink>
            <NavLink
              className="flex gap-1 rounded-full transition ease-in-out delay-100 hover:text-[#606c38]"
              to="news"
              onClick={() => {
                toggleModal();
              }}
            >
              <p>最新消息</p>
            </NavLink>
            <NavLink
              className="flex gap-1 rounded-full transition ease-in-out delay-100 hover:text-[#606c38]"
              to="active"
              onClick={() => {
                toggleModal();
              }}
            >
              <p>活動專區</p>
            </NavLink>
          </nav>

          <div>
            <span className="hover:cursor-pointer bg-white text-primary rounded-full justify-center items-center px-5 py-2">
              登入
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SmallNavModal;

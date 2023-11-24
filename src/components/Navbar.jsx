import { NavLink, Link } from "react-router-dom";
import { PiListBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = ({ toggleModal, showModal }) => {
  return (
    <div className="flex justify-between py-6 relative items-center">
      <Link to="/">
        <img className="w-25 h-16" src={logo} />
      </Link>
      <nav className="hidden lg:flex items-center gap-2 text-xl text-primary">
        <NavLink
          end
          className="flex gap-1 account py-2 px-6 rounded-full transition ease-in-out delay-100 hover:text-[#606c38]"
          to="how-to-use"
        >
          <p>使用說明</p>
        </NavLink>
        <NavLink
          className="flex gap-1 account py-2 px-6 rounded-full transition ease-in-out delay-100 hover:text-[#606c38]"
          to="terms-fee"
        >
          <p>收費方式</p>
        </NavLink>
        <NavLink
          className="flex gap-1 account py-2 px-6 rounded-full transition ease-in-out delay-100 hover:text-[#606c38]"
          to="information"
        >
          <p>站點資訊</p>
        </NavLink>
        <NavLink
          className="flex gap-1 account py-2 px-6 rounded-full transition ease-in-out delay-100 hover:text-[#606c38]"
          to="news"
        >
          <p>最新消息</p>
        </NavLink>
        <NavLink
          className="flex gap-1 account py-2 px-6 rounded-full transition ease-in-out delay-100 hover:text-[#606c38]"
          to="active"
        >
          <p>活動專區</p>
        </NavLink>
      </nav>
      <div className="bg-primary text-white rounded-full hidden lg:flex justify-center items-center px-5 py-2">
        登入
      </div>
      <div
        className="lg:hidden hover:cursor-pointer"
        onClick={() => toggleModal()}
      >
        {showModal ? (
          <IoMdClose className="text-primary" size={40} />
        ) : (
          <PiListBold className="text-primary" size={40} />
        )}
      </div>
    </div>
  );
};
export default Navbar;

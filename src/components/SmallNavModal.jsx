import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const list = [
  { name: "使用說明", path: "how-to-use" },
  { name: "收費方式", path: "terms-fee" },
  { name: "站點資訊", path: "information" },
  { name: "最新消息", path: "news" },
  { name: "活動專區", path: "active" },
];

const SmallNavModal = ({ showModal, toggleModal }) => {
  return (
    <div className="fixed h-[88%] top-28 w-screen bg-primary z-20 px-6 py-6">
      <div className="flex flex-col justify-between h-full">
        <nav className="flex flex-col gap-6 text-xl text-white hover:#606c38 text-start">
          {list.map((item, index) => (
            <div key={index}>
              <NavLink
                className="inline-block transition ease-in-out delay-100 hover:text-[#606c38]"
                to={item.path}
                onClick={() => {
                  toggleModal();
                }}
              >
                <p>{item.name}</p>
              </NavLink>
            </div>
          ))}
        </nav>

        <div>
          <button className="inline-block hover:cursor-pointer bg-white text-primary rounded-full justify-center items-center px-5 py-2">
            登入
          </button>
        </div>
      </div>
    </div>
  );
};
export default SmallNavModal;

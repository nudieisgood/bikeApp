import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const list = [
  { name: "使用說明", path: "how-to-use" },
  { name: "收費方式", path: "terms-fee" },
  { name: "站點資訊", path: "information" },
  { name: "最新消息", path: "news" },
  { name: "活動專區", path: "active" },
];

const SmallNavModal = ({ showModal, toggleModal }) => {
  return (
    <div className="fixed bg-primary w-screen h-screen z-20">
      <Navbar showModal={showModal} toggleModal={toggleModal} />

      <div className="flex flex-col gap-96 p-6">
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

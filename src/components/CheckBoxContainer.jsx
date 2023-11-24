import { useEffect } from "react";
import { useState } from "react";
import banner from "../assets/banner.png";
import { useAppContext } from "../context/AppContext";

const CheckBoxContainer = () => {
  const { areas, handleArea, handleAllAreas } = useAppContext();
  console.log(areas);
  const [checkAll, setCheckAll] = useState(true);
  const handleChangeAll = () => {
    setCheckAll(!checkAll);
  };

  useEffect(() => {
    handleAllAreas(checkAll);
  }, [checkAll]);

  return (
    <div className="grid lg:grid-cols-2">
      <div className="space-y-4">
        <div>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              className="rounded-none"
              checked={checkAll}
              type="checkbox"
              name="checkAll"
              onChange={handleChangeAll}
            />
            <span className="font-light flex gap-4 items-center">全部勾選</span>
          </label>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {areas?.map((area, index) => (
            <label
              key={index}
              className="cursor-pointer flex gap-4 items-center"
            >
              <input
                checked={area?.checked}
                type="checkbox"
                name={area?.name}
                onChange={(e) => {
                  handleArea(e.target.name, e.target.checked);
                }}
              />
              <span className="font-light">{area?.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={banner} />
      </div>
    </div>
  );
};
export default CheckBoxContainer;

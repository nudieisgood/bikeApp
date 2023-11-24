import { useAppContext } from "../context/AppContext";
import { cities } from "../helper";

const CitySelect = () => {
  const { handleCity, city } = useAppContext();
  return (
    <select
      onChange={(e) => {
        handleCity(e.target.value);
      }}
      value={city}
      name="city"
      id="city"
      className="py-2 px-4 rounded-lg bg-gray-100"
    >
      {cities.map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};
export default CitySelect;

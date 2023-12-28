import CheckBoxContainer from "../components/CheckBoxContainer";
import CitySearch from "../components/CitySearch";
import CitySelect from "../components/CitySelect";
import InfoContainer from "../components/InfoContainer";
import { useAppContext } from "../context/AppContext";

const Information = () => {
  const { data, city } = useAppContext();
  if (!data) return <>Loading...</>;

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-primary text-2xl tracking-widest font-semibold">
        站點資訊sas
      </h1>
      <div className="flex flex-col sm:flex-row lg:items-center gap-2">
        <CitySelect />
        <CitySearch />
      </div>
      <div>{city === "台北市" && <CheckBoxContainer />}</div>
      {city === "台北市" && <InfoContainer />}
    </div>
  );
};
export default Information;

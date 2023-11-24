import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [areas, setAreas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
    );
    const data = await res.json();
    setData(data);
  };

  const handleCity = (city) => {
    setCity(city);
  };

  const handleSearch = () => {
    if (!search) return;

    setFilteredData((pre) =>
      filteredData.filter((data) => data.sna.includes(search))
    );
  };

  const handleArea = (name, checked) => {
    const updatedAreas = areas.map((area) => {
      if (area.name === name) {
        area.checked = checked;
        return area;
      }
      return area;
    });
    setAreas(updatedAreas);
  };

  const handleAllAreas = (checkAll) => {
    if (checkAll) {
      return setAreas(
        areas.map((area) => ({ name: area.name, checked: true }))
      );
    }

    return setAreas(areas.map((area) => ({ name: area.name, checked: false })));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const areas = data?.map((item) => item?.sarea);

    const uniqueAreas = [...new Set(areas)].map((area) => ({
      name: area,
      checked: true,
    }));

    setAreas(uniqueAreas);
  }, [city, data]);

  useEffect(() => {
    const checkedArr = areas
      ?.filter((area) => area?.checked)
      ?.map((area) => area?.name);

    setFilteredData(data?.filter((item) => checkedArr?.includes(item.sarea)));
  }, [areas]);

  useEffect(() => {
    const checkedArr = areas
      ?.filter((area) => area?.checked)
      ?.map((area) => area?.name);

    setFilteredData(data?.filter((item) => checkedArr?.includes(item.sarea)));
  }, [areas, search]);

  const contextValue = {
    search,
    data,
    city,
    areas,
    filteredData,
    setSearch,
    handleCity,
    handleArea,
    handleAllAreas,
    handleSearch,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };

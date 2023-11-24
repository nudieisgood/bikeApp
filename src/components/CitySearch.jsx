import { IoSearchOutline } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";

const CitySearch = () => {
  const { handleSearch, search, setSearch } = useAppContext();

  return (
    <div className="relative">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="py-2 px-4 rounded-lg bg-gray-100 w-full"
        type="text"
        placeholder="搜尋站點"
        value={search}
      />
      <div
        className="absolute top-3 right-4 text-gray-400 hover:cursor-pointer"
        onClick={() => {
          handleSearch();
        }}
      >
        <IoSearchOutline />
      </div>
    </div>
  );
};
export default CitySearch;

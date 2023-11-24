import { useAppContext } from "../context/AppContext";

const InfoContainer = () => {
  const { city, filteredData } = useAppContext();
  return (
    <div className="rounded-3xl overflow-hidden font-light overflow-x-scroll">
      <table className="text-center w-full min-w-[720px] overflow-scroll">
        <thead className="bg-primary text-white">
          <tr>
            <th className="font-normal px-4 py-8">縣市</th>
            <th className="font-normal px-4 py-8">區域</th>
            <th className="font-normal px-4 py-8">站點名稱</th>
            <th className="font-normal px-4 py-8">可借車輛</th>
            <th className="font-normal px-4 py-8">可還空位</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((item, index) => {
            const isOdd = index % 2;
            return (
              <tr key={index} className={`${isOdd && "bg-gray-100"}`}>
                <td className="px-4 py-8">{city}</td>
                <td className="px-4 py-8">{item.sarea}</td>
                <td className="px-4 py-8">{item.sna}</td>
                <td className="px-4 py-8">{item.sbi}</td>
                <td className="px-4 py-8">{item.bemp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default InfoContainer;

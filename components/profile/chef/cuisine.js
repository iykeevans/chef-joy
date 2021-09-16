import Image from "next/image";
import { IMAGE_URL } from "../../../constants/enviroment-vars";

const Cuisine = ({ cuisine, setSelected, isActive }) => (
  <div
    className={`${
      !isActive ? "bg-gray-100" : "bg-white"
    } flex items-center md:p-5 p-3 md:mb-0 mb-5 cursor-pointer flex-none`}
    style={{
      borderRadius: 12,
      width: "23%",
      boxShadow: isActive && "0px 7px 64px rgba(0, 0, 0, 0.10)",
    }}
    onClick={() => setSelected(cuisine)}
  >
    <div className="bg-gray-500 h-16 w-16 rounded-full relative">
      <Image
        src={`${IMAGE_URL}${cuisine.image1}`}
        alt={cuisine.name}
        className="rounded-full"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="ml-5">
      <h4 className="text-lg font-semibold mb-1">{cuisine.name}</h4>
      <p>{cuisine.count} Dishes</p>
    </div>
  </div>
);

export default Cuisine;

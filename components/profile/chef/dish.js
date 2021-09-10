import Image from "next/image";

const Dish = ({ dish, selected, setSelected }) => (
  <div
    className={`${
      selected._id !== dish._id ? "bg-gray-100" : "bg-white"
    } flex items-center md:p-5 p-3 md:mb-0 mb-5 cursor-pointer flex-none`}
    style={{
      borderRadius: 12,
      width: "23%",
      border: selected._id === dish._id && "1px solid #eee",
    }}
    onClick={() => setSelected(dish)}
  >
    <div className="bg-gray-500 h-16 w-16 rounded-full relative">
      <Image
        src={`/assets/images/dishes/chinese.png`}
        alt={dish.name}
        layout="fill"
      />
    </div>
    <div className="ml-5">
      <h4 className="text-lg font-semibold mb-1">{dish.name}</h4>
      <p>{dish.value} Dishes</p>
    </div>
  </div>
);

export default Dish;

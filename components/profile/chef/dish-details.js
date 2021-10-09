import Image from "next/image";
import { IMAGE_URL } from "../../../constants/enviroment-vars";
import trimString from "../../../utils/trim-string";
import getDishMinutes from "../../../utils/get-dish-minutes";
import CartButton from "../../cart-button";

const DishDetails = ({ dishDetail, handleCart }) => {
  return (
    <div>
      <div
        className="mb-4 relative rounded-lg"
        style={{ height: 180, background: "#eee" }}
      >
        <Image
          src={`${IMAGE_URL}${dishDetail.images[0]}`}
          alt={dishDetail.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div>
        <div className="text-lg font-semibold mb-1">{dishDetail.name}</div>

        <div className="text-sm mb-2">
          {dishDetail.cookingInfo.length
            ? `Serves ${dishDetail.count} - ${getDishMinutes(
                dishDetail.cookingInfo,
                dishDetail.count
              )} mins`
            : "Serves 0 - 0 mins"}
        </div>

        <div className="border-b pb-5 pt-1 text-gray-500">
          {dishDetail.description && trimString(dishDetail.description, 40)}
        </div>

        <div className="mt-6 text-gray-700">
          <CartButton
            count={dishDetail.count}
            onClick={(actionType) => handleCart(actionType, dishDetail.id)}
            hasExceeded={
              dishDetail.price.consumer_max_guest == dishDetail.count
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DishDetails;

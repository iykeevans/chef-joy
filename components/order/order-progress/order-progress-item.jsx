import Check from "./check.svg";

function OrderProgressItem({ number, name, isActive, isComplete, onClick }) {
  return (
    <button
      className={`flex md:flex-row flex-col items-center font-medium md:text-base text-xs ${
        isComplete ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      disabled={!isComplete}
      onClick={onClick}
    >
      <div
        className={`${
          isActive || isComplete
            ? "bg-red-500 text-white"
            : "bg-gray-100 text-gray-400"
        } md:h-8 h-6 md:w-8 w-6 rounded-full flex items-center justify-center md:mr-2 md:mb-0 mb-1`}
      >
        {isComplete ? <Check /> : number}
      </div>
      {name}
    </button>
  );
}

export default OrderProgressItem;

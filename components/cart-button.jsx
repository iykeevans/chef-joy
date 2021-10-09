function CartButton({ count, onClick, hasExceeded }) {
  if (count)
    return (
      <div className="flex">
        <span className="flex items-center h-10 w-auto border border-black px-6 font-medium rounded-lg">
          <button
            className={`text-lg font-semibold mr-4 ${
              hasExceeded ? "cursor-not-allowed text-gray-200" : "text-red-600"
            }`}
            onClick={() => onClick("INCREMENT")}
            disabled={hasExceeded}
          >
            {"+"}
          </button>{" "}
          {count}{" "}
          <button
            className="text-lg font-semibold text-red-600 ml-4"
            onClick={() => onClick("DECREMENT")}
          >
            {"-"}
          </button>
        </span>
      </div>
    );

  return (
    <button
      className="h-10 border border-black px-7 font-medium rounded-lg"
      onClick={() => onClick("ADD")}
    >
      <span className="font-semibold text-red-600">+</span> ADD
    </button>
  );
}

export default CartButton;

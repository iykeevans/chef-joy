function CartList({ address }) {
  return (
    <div className="flex items-center border px-4 py-3 rounded-lg mb-5">
      <input type="radio" />

      <div className="flex flex-col ml-4">
        <span className="font-semibold">{address.name}</span>
        <span className="text-gray-500 md:text-base text-xs">
          {address.details}
        </span>
      </div>
    </div>
  );
}

export default CartList;

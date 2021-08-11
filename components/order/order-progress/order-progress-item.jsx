function CartProgress({ number, name }) {
  return (
    <div className="flex items-center font-medium">
      <div className="bg-red-500 text-white h-8 w-8 rounded-full flex items-center justify-center mr-2">
        {number}
      </div>
      {name}
    </div>
  );
}

export default CartProgress;

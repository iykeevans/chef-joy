function OrderSummary() {
  return (
    <div
      className="w-full p-4"
      style={{
        boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
      }}
    >
      <div className="flex items-center border-b pb-4">
        <div className="flex flex-col w-1/2">
          <span className="text-xs">Date</span>
          <span className="font-medium text-red-600">16th Apr&apos;2</span>
        </div>

        <div className="flex flex-col w-1/2">
          <span className="text-xs">Time</span>
          <span className="font-medium text-red-600">7:00PM - 8:55PM</span>
        </div>
      </div>

      <div className="flex justify-between mt-3 mb-1">
        <div className="font-medium">Total Time</div>
        <div className="font-medium">40 Mins</div>
      </div>

      <div className="flex justify-between mb-2">
        <div className="flex items-center text-sm">
          <input type="checkbox" name="" id="" className="mr-1" />
          Pick Up Grocery
        </div>

        <span className="text-sm">$4.00</span>
      </div>

      <div className="text-gray-500 mb-5" style={{ fontSize: 10 }}>
        Pickup Charge Does Not Include Cost Of Grocery
      </div>

      <div className="flex justify-between mb-5">
        <div className="flex flex-col">
          <span className="font-medium">Cooking Charges</span>
          <span className="text-sm text-gray-500">(Goes To Chef)</span>
        </div>

        <div>$40.00</div>
      </div>

      <div className="flex justify-between mb-5">
        <div className="flex flex-col">
          <span className="font-medium">Platform Fee</span>
          <span className="text-sm text-gray-500">(Goes To Chef Joy)</span>
        </div>

        <div>$10.00</div>
      </div>

      <div className="flex justify-between border-b pb-3">
        <div className="font-medium">Taxes</div>

        <div>$6.00</div>
      </div>

      <div className="flex justify-between mt-3">
        <div className="font-semibold">Total</div>

        <div className="font-semibold">$56.00</div>
      </div>
    </div>
  );
}

export default OrderSummary;

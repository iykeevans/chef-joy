function OrderCard({ data, selected, setSelected }) {
  return (
    <div className="flex items-center border px-4 py-3 rounded-lg mb-5">
      <input
        type="radio"
        value={data.slug || data.name}
        checked={selected == data.slug}
        onChange={() => setSelected(data.slug)}
      />

      <div className="flex flex-col ml-4">
        <span className="font-semibold">{data.name}</span>
        <span className="text-gray-500 md:text-base text-xs">
          {data.details}
        </span>
      </div>
    </div>
  );
}

export default OrderCard;

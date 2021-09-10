import Link from "next/link";

const StickyCart = ({ total }) => (
  <div
    className="fixed w-full border bg-white z-10"
    style={{ bottom: 0, left: 0, height: 80 }}
  >
    <div className="w-11/12 h-full mx-auto flex items-center justify-between">
      <div className="flex flex-col">
        <span>Your Order</span>
        <span className="hidden md:block">({total} Servings)</span>
        <span className="md:hidden font-semibold">$0</span>
      </div>

      <div className="flex items-center">
        <span className="mr-6 hidden md:block">Subtotal $0</span>
        <Link href="/chef/order">
          <a className="bg-black py-4 px-8 rounded-lg text-white">Proceed</a>
        </Link>
      </div>
    </div>
  </div>
);

export default StickyCart;

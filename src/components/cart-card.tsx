import removeIcon from "../assets/images/icon-remove-item.svg";

export default function CartCard() {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-md p-4 shadow">
      <h1 className="text-rose-600 text-3xl font-bold">Your Cart ({7})</h1>

      <div className="flex flex-col gap-8 border-y py-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-semibold">Classic Tiramisu</span>
            <div className="flex gap-6">
              <span className="text-rose-600 font-semibold">{1}x</span>
              <span className="text-rose-900">@{"$5.50"}</span>
              <span className="font-semibold text-rose-900">{"$5.50"}</span>
            </div>
          </div>
          <button className="size-5 border rounded-full border-rose-900 flex items-center justify-center">
            <img src={removeIcon} className="size-3" />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-semibold">Classic Tiramisu</span>
            <div className="flex gap-6">
              <span className="text-rose-600 font-semibold">{4}x</span>
              <span className="text-rose-900">@{"$7.00"}</span>
              <span className="font-semibold text-rose-900">{"$28.00"}</span>
            </div>
          </div>
          <button className="size-5 border rounded-full border-rose-900 flex items-center justify-center">
            <img src={removeIcon} className="size-3" />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-semibold">Classic Tiramisu</span>
            <div className="flex gap-6">
              <span className="text-rose-600 font-semibold">{2}x</span>
              <span className="text-rose-900">@{"$6.50"}</span>
              <span className="font-semibold text-rose-900">{"$13.00"}</span>
            </div>
          </div>
          <button className="size-5 border rounded-full border-rose-900 flex items-center justify-center">
            <img src={removeIcon} className="size-3" />
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <span>Order Total</span>
        <span className="font-bold text-2xl">{"$46.50"}</span>
      </div>

      <button className="bg-rose-600 hover:bg-rose-800 text-white font-semibold py-3 px-2 rounded-full">
        Confirm Order
      </button>
    </div>
  );
}

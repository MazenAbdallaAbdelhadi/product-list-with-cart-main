import { IProduct } from "../types/product";

import cartIcon from "../assets/images/icon-add-to-cart.svg";

interface IProductCard {
  product: IProduct;
}

export function ProductCard({ product }: IProductCard) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.title}
          className="bg-white object-contain rounded-lg shadow aspect-square border"
        />
        <button className="border border-rose-600 inline-flex gap-2 items-center text-sm font-semibold hover:text-rose-600 py-2 px-6 rounded-full -translate-y-1/2 bg-white truncate">
          <img src={cartIcon} className="size-5" />
          Add to Cart
        </button>
      </div>
      <span className="text-sm text-rose-900">{product.category}</span>
      <h2 className="text-lg font-semibold truncate" title={product.title}>
        {product.title}
      </h2>
      <p className="text-rose-600 font-semibold">${product.price}</p>
    </div>
  );
}

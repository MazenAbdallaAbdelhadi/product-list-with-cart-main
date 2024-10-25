import { IProduct } from "../types/product";
import { ProductCard } from "./product-card";

interface IProductList {
  products: IProduct[];
}

export default function ProductList({ products }: IProductList) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

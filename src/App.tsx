import CartCard from "./components/cart-card";
import ProductList from "./components/product-list";
import { useFetch } from "./hooks/use-fetch";
import { IProduct } from "./types/product";

function App() {
  const { data, error, isError, isPending } = useFetch<IProduct[]>(
    "https://fakestoreapi.com/products"
  );

  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center bg-rose-100">
        <span className="text-3xl text-rose-600">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <div>error: {error}</div>;
  }

  return (
    <main className="p-12 flex flex-col md:flex-row justify-between gap-6 bg-rose-50">
      <ProductList products={data || []} />
      <div className="min-w-[300px] lg:min-w-[400px]">
        <CartCard />
      </div>
    </main>
  );
}

export default App;

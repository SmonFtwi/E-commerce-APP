import ProductCard from "../componenets/productCard";
import ProductArray from "../data/productArray";

function Home(){
    const { products } = ProductArray();
   
    console.log(products)
    return (
        <div className="flex flex-wrap gap-10 justify-center mt-10 w-full max-h-full">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    )
}

export default Home;

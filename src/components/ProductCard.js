//ProductCard component get product props from parent component
function ProductCard({ product }) {
  return (
    <div className="bg-slate-200 rounded-2xl shadow-md overflow-hidden text-center min-w-80 max-w-[400px] w-full h-full">
      <img
        src={product.image}
        alt="product img"
        className="w-full h-auto max-w-[400px] max-h-[300px] object-cover select-none"
      />
      <div className="pt-5 px-4 pb-6 flex flex-col gap-2 justify-center items-center">
        <h2 className="text-xl font-bold uppercase">{product.name}</h2>
        <p className="text-lg">{product.description}</p>
        <p className="text-xl">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;

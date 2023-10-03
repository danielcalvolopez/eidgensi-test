const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("failed to fetch products");
  }
  return await response.json();
};

export default getProducts;

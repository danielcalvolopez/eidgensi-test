const getProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("failed to fetch products");
  }
  return await response.json();
};

export default getProduct;

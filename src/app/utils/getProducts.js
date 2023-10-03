const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    next: {
      revalidate: 120,
    },
  });

  if (!response.ok) {
    throw new Error("failed to fetch products");
  }
  return await response.json();
};

export default getProducts;

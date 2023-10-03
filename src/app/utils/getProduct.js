const getProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    next: {
      revalidate: 120,
    },
  });

  if (!response.ok) {
    throw new Error("failed to fetch products");
  }
  return await response.json();
};

export default getProduct;

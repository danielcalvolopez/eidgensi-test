This is a technical test for Eidgensi.

1. Create a NextJS project.

2. Use https://dummyjson.com/docs/products for fetching dummy products and render them on home page. Each product should be a card with a title, description, image and link to its own page.

3. Create dynamic pages for each product.

As for this test it was specified that the product page should fetch the data from the same API, I have fetched all the products and user the Find method to find the current product by its ID.

I also created a second option which consists on fetching the data directly from the API that takes the ID number, hence you will find two functions in the utils folder: getProducts and getProduct (that accepts an ID parameter).

The styles have been applied using CSS modules.

Deployment (Vercel): https://eidgensi-test.vercel.app/


fetch('./productsData/products.json')
    .then(results => results.json())
    .then(console.log)
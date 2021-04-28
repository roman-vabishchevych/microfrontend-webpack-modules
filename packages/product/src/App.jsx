import React from 'react';
import ProductList from './ProductList';

const products = [
  { key: 10, title: 'Red', description: 'The red color of product' },
  { key: 20, title: 'Green', description: 'The green color of product' },
  { key: 30, title: 'Blue', description: 'The Blue color of product' },
];

const App = () => (
  <section>
    <h1>Products dev page</h1>
    <ProductList products={products} />
  </section>
);

export default App;

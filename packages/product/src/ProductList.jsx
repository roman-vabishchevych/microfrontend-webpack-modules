import React from 'react';
import ProductCard from './ProductCard';
import styles from './styles';

export default ({ products }) => (
  <section style={ styles.main } >
    <div style={ styles.list }>
      { products.map(({ key, ...product }) => (
        <div style={ styles.item }>
          <ProductCard key={key} {...product} />
        </div>
      )) }
    </div>
  </section>
);

import React, { useState } from 'react';
import Header from 'nav/Header';
import ProductCard from 'product/ProductCard';
const ProductList = React.lazy(() => import('product/ProductList'));
import styles from './styles';
import products from './products';

function App() {
  const [ shown, setShown ] = useState(false);
  return (
    <main style={ styles.main }>
      <Header />
      <div style={ styles.topProducts }>
        {
          products.slice(0, 2)
            .map(({ key, ...product }) => (
              <div key={ key } style={ styles.topProduct }>
                <ProductCard { ...product } />
              </div>
            ))
        }
      </div>
      {shown && 
        <React.Suspense fallback={ null }>
          <div>
            <ProductList products={ products.slice(2, products.length) } />
          </div>
        </React.Suspense>
      }
      {!shown && 
        <button onClick={ () => setShown(true) } >
          Show the full list of products
        </button>
      }
    </main>
  );
}

export default App;

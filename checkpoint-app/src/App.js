import React, { useState, useEffect } from 'react'
import './App.css';
import ProductBox from './components/ProductBox';

function App() {
  const [state, setState] = useState({
    productList: [],
    selectedProductStatus: null,
    selectedProductImage: null,
    selectedProductDetails: null,
  });
  
  useEffect (() => {
    async function fetchProducts () {
      const res = await fetch('http://52.26.193.201:3000/products/list');
      const data = await res.json();
      // console.log(data)
      setState({productList: data});
    }
    fetchProducts();
  }, []);
  
  // console.log(state)

  return (
    <div className="App">
      <header className="React Hooks Checkpoint">
      </header>
      <div className="app-title flex-column">
        <h1>Available Products</h1>
        {/* <ProductBox list={state.productList} /> */}
        <ProductBox list={state.productList} state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;

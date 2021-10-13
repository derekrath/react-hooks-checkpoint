import React, { useEffect } from 'react'
import Details from "./Details.js";

function ProductCard( {product, key, state, setState} ) {

  useEffect (() => {
      
    async function fetchSelectedProductDetails() {
      const imageData = await fetch('http://52.26.193.201:3000/products/:product_id/styles');
      const imageJson = await imageData.json();
      const imageUrl = imageJson.results[0].photos[0].thumbnail_url;
  
      const detailData = await fetch('http://52.26.193.201:3000/products/:product_id');
      const detailJson = await detailData.json();
    
      setState({
        selectedProductImage: imageUrl,
        selectedProductDetails: detailJson,
      })
    }

    if (state.selectedProductStatus) {
      fetchSelectedProductDetails();
    }
  
    //reset state to null before each new selection?
  });

    return (
      <div className="product-card flex-column" onClick={() => setState({selectedProductStatus: true})}>
        <Details state={state} />
        <div className="product-name">{product.name}</div>
      </div>
    );
}

//how to get the new state up to the App without useContext??

export default ProductCard;
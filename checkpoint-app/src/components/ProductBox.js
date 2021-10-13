import ProductCard from "./ProductCard.js";

function ProductBox( {state, setState} ) {
    // console.log(state)
    let list = state.productList;
    console.log(list)
  return (
    <div className="product-box flex-row">
      {list.map((productObj, index) => (
        //   <ProductCard product={productObj} key={index} />
        <ProductCard product={productObj} key={index} state={state} setState={setState} />
        // <>{console.log(productObj)}</>
      ))}
    </div>
  );
}

export default ProductBox;

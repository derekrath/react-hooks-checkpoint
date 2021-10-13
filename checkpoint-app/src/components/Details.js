function Details ( {state} ) {
    // let key= product.name + index;
    let status= state.selectedProductStatus;
    let photo= state.selectedProductImage;
    let details= state.selectedProductDetails;

    if (status) {
        return (
            <>
            <div className="product-image-frame">
                <img alt="product" className="product-image" src={photo} />
            </div>
            <div>{details}</div>
            </>
        )
    } else {
        return (<></>)
    }
}

export default Details;
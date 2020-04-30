import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

// This is using the context API rather than props drill down
// We need to place this as high as possible in the component tree
// So in our case we are going to place it on top of the router
const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  };
  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("hello from add to cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
// The ...this.state destructures the state and gets all of it
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

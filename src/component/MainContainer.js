import React, { Component } from "react";
import { Container, Row, Badge } from "react-bootstrap";
import Category from "./Category";
import Products from "./Products";
import Cart from "./Cart";
import API from "../api";
import * as apiList from "../api/apiList";

export default class MainContainer extends Component {
  state = {
    selectedCategory: null,
    products: [],
    orderedProducts: [],
    total: 0
  };

  calculateTotal = products => {
    let sum = products.reduce(function(cnt, o) {
      let subtotal = o.product_price * o.quantity;
      return cnt + subtotal;
    }, 0);
    return sum;
  };

  orderProduct = product => {
    let product_detail = product;
    let allProduct = [...this.state.orderedProducts];

    if (allProduct.find(pro => pro.product_id === product.product_id)) {
      allProduct = allProduct.map(pro =>
        pro.product_id === product.product_id
          ? {
              ...pro,
              quantity: pro.quantity + 1
            }
          : pro
      );
    } else {
      product_detail.quantity = 1;
      allProduct = [...allProduct, product_detail];
    }

    let total = this.calculateTotal(allProduct);
    this.setState({ orderedProducts: allProduct, total: total });
  };

  getProducts = category_id => {
    API.get(apiList.GET_PRODUCTS + "/" + category_id).then(({ data }) => {
      this.setState({
        products: data.response,
        selectedCategory: category_id
      });
    });
  };

  chaneQuantity = products => {
    let total = this.calculateTotal(products);

    this.setState({
      orderedProducts: products,
      total: total
    });
  };

  render() {
    return (
      <Container fluid className="full-height">
        <section className="header">
          <h1 className="text-center my-3">
            Let's Have Snacks!
            <img
              className="float-right cart-icon"
              // src="assets/images/food-cart-icon.png"
              src="assets/images/food.png"
              alt="Cart"
            />
          </h1>
        </section>
        <section className="dashboard">
          <Container fluid>
            <Row>
              <Category
                selectCategory={this.getProducts}
                category={this.state.selectedCategory}
              />
              <Products
                products={this.state.products}
                orderProduct={this.orderProduct}
              />
              <Cart
                orderedProducts={this.state.orderedProducts}
                chaneQuantity={this.chaneQuantity}
                total={this.state.total}
              />
            </Row>
          </Container>
        </section>
      </Container>
    );
  }
}

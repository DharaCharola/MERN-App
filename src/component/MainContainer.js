import React, { Component } from "react";
import { Container, Row, Badge } from "react-bootstrap";
import Category from "./Category";
import Products from "./Products";
import Cart from "./Cart";

export default class MainContainer extends Component {
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
              <Category />
              <Products />
              <Cart />
            </Row>
          </Container>
        </section>
      </Container>
    );
  }
}

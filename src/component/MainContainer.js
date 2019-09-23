import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Category from "./Category";
import Products from "./Products";
import Cart from "./Cart";

export default class MainContainer extends Component {
  render() {
    return (
      <Container fluid className="full-height">
        <section className="header">
          <h1 className="text-center my-3">Let's Have Snacks!</h1>
        </section>
        <section className="dashboard full-height">
          <Container fluid className="overflow-auto">
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

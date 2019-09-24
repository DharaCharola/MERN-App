import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";
import { toCurrency } from "../helper/utill";

export default class Products extends Component {
  state = {
    products: [],
    category: null
  };

  renderProducts = () => {
    const { products } = this.props;

    return products.map(product => (
      <Card>
        <div
          className="overlay"
          onClick={() => this.props.orderProduct(product)}
        >
          Add to cart
        </div>

        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_SERVER_URL}/images/product_images/${product.product_image}`}
          className="product-img"
        />
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>
          <Card.Subtitle className="text-muted">
            {toCurrency(product.product_price)}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    ));
  };

  render() {
    return (
      <Col xs={6} sm={5} md={5} lg={5} className="product-display">
        {this.renderProducts()}
      </Col>
    );
  }
}

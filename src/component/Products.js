import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";

export default class Products extends Component {
  render() {
    return (
      <Col xs={6} sm={5} md={5} lg={5} className="product-display">
        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Subtitle className="text-muted">Price</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Subtitle className="text-muted">Price</Card.Subtitle>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Subtitle className="text-muted">Price</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Subtitle className="text-muted">Price</Card.Subtitle>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Subtitle className="text-muted">Price</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Subtitle className="text-muted">Price</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

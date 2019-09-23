import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";

export default class Category extends Component {
  render() {
    return (
      <Col xs={6} sm={2} md={2} lg={2} className="category-frame">
        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Category Title</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Category Title</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Category Title</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
          <Card.Body>
            <Card.Title>Category Title</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

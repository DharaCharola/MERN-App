import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";
import API from "../api";
import * as apiList from "../api/apiList";

export default class Category extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    API.get(apiList.GET_CATEGORIES).then(({ data }) => {
      if (this.props.category === null) {
        this.props.selectCategory(data.response[0].category_id);
      }
      this.setState({
        categories: data.response
      });
    });
  };

  categorySelection = e => {
    this.props.selectCategory(e.target.id);
  };

  renderCategories = () => {
    const { categories } = this.state;

    return categories.map((category, index) => (
      <Card key={`cat_${index}`}>
        <div
          id={category.category_id}
          className="overlay"
          onClick={this.categorySelection}
        >
          View Products
        </div>
        <Card.Img
          variant="top"
          className="category-img"
          src={`${process.env.REACT_APP_SERVER_URL}/images/category_images/${category.category_image}`}
        />
        <Card.Body>
          <Card.Title>{category.category_name}</Card.Title>
        </Card.Body>
      </Card>
    ));
  };

  render() {
    return (
      <Col xs={6} sm={2} md={2} lg={2} className="category-frame">
        {this.renderCategories()}
      </Col>
    );
  }
}

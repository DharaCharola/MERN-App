import React, { Component } from "react";
import { Col, Table, Button } from "react-bootstrap";
import { toCurrency } from "../helper/utill";

export default class Cart extends Component {
  state = {
    showBox: null
  };

  handleQauntityBox = (id = null) => {
    this.setState({ showBox: id });
  };

  chaneQuantity = e => {
    e.preventDefault();
    let products = [...this.props.orderedProducts];
    products = products.map(product =>
      product.product_id == e.target.id
        ? {
            ...product,
            quantity: e.target.value
          }
        : product
    );
    this.props.chaneQuantity(products);
  };

  removeItem = product_id => {
    let orderedProducts = [...this.props.orderedProducts];
    orderedProducts = orderedProducts.filter(
      pro => pro.product_id !== product_id
    );
    this.props.chaneQuantity(orderedProducts);
  };

  handleKey = e => {
    if (e.charCode === 45 || e.charCode === 48) {
      e.preventDefault();
      return false;
    }
  };

  renderCartProducts = () => {
    const { showBox } = this.state;
    const { orderedProducts } = this.props;

    return orderedProducts.map((product, index) => {
      return (
        <tr key={`cart_pro_${index}`}>
          <td className="cart-product">
            <div
              className="del-container"
              onClick={() => this.removeItem(product.product_id)}
            >
              <span className="remove">x</span>
            </div>
            <div>
              {product.product_name}
              <p className="price-tag">{toCurrency(product.product_price)}</p>
            </div>
          </td>
          <td className="text-center">
            {showBox !== product.product_id && (
              <span
                onDoubleClick={() => this.handleQauntityBox(product.product_id)}
              >
                {product.quantity}
              </span>
            )}
            {showBox === product.product_id && (
              <input
                min={1}
                onKeyPress={this.handleKey}
                type="number"
                name="quantity"
                className="quantity"
                value={product.quantity}
                onChange={this.chaneQuantity}
                onBlur={() => this.handleQauntityBox(null)}
                id={product.product_id}
              />
            )}
          </td>
          <td className="text-right">
            {toCurrency(product.quantity * product.product_price)}
          </td>
        </tr>
      );
    });
  };

  renderNoItems = () => {
    return (
      <tr>
        <td colSpan={4} className="text-center text-muted">
          <h6>No item in your cart</h6>
        </td>
      </tr>
    );
  };
  render() {
    const { orderedProducts } = this.props;

    return (
      <Col xs={12} sm={5} md={5} lg={5} className="order-tray">
        <h3 className="text-center">Food On Tray</h3>
        <Table>
          <thead>
            <tr>
              <th>
                Dish
                <p className="price-tag">( Price )</p>
              </th>
              <th className="text-center">Quantity</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orderedProducts.length > 0
              ? this.renderCartProducts()
              : this.renderNoItems()}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="text-right">
                <b>Total</b>
              </td>
              <td className="text-right">{toCurrency(this.props.total)}</td>
            </tr>
            <tr>
              <td colSpan={3} className="text-center">
                <Button
                  variant="outline-secondary"
                  onClick={() => this.props.chaneQuantity([])}
                >
                  Place Order
                </Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Col>
    );
  }
}

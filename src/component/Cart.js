import React, { Component } from "react";
import { Col, Table } from "react-bootstrap";
import { toCurrency } from "./utill";
export default class Cart extends Component {
  state = {
    showBox: null,
    products: [
      {
        id: 1,
        name: "test1",
        quantity: 1,
        price: 100
      },
      {
        id: 2,
        name: "test2",
        quantity: 2,
        price: 500
      }
    ]
  };

  handleQauntityBox = (id = null) => {
    this.setState({ showBox: id });
  };

  chaneQuantity = e => {
    e.preventDefault();
    let products = [...this.state.products];
    products = products.map(product =>
      product.id == e.target.id
        ? {
            ...product,
            quantity: e.target.value
          }
        : product
    );
    this.setState({ products });
  };

  renderCartProducts = () => {
    const { products, showBox } = this.state;

    return products.map((product, index) => {
      return (
        <tr key={`tr_${index}`}>
          <td>
            {product.name}
            <p className="price-tag">{toCurrency(product.price)}</p>
          </td>
          <td className="text-center">
            {showBox !== product.id && (
              <span onDoubleClick={() => this.handleQauntityBox(product.id)}>
                {product.quantity}
              </span>
            )}
            {showBox === product.id && (
              <input
                min={1}
                type="number"
                name="quantity"
                className="quantity"
                value={product.quantity}
                onChange={this.chaneQuantity}
                onBlur={() => this.handleQauntityBox(null)}
                id={product.id}
              />
            )}
          </td>
          <td className="text-right">
            {toCurrency(product.quantity * product.price)}
          </td>
        </tr>
      );
    });
  };

  render() {
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
          <tbody>{this.renderCartProducts()}</tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="text-right">
                <b>Total</b>
              </td>
              <td className="text-right">{toCurrency(10000)}</td>
            </tr>
          </tfoot>
        </Table>
      </Col>
    );
  }
}

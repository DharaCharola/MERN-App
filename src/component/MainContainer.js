import React, { Component } from 'react'
import { Container, Row, Col, Card, ListGroup, Table } from "react-bootstrap"

export default class MainContainer extends Component {
  render() {
    return (
      <Container fluid className="full-height">
        <section className="header">
          <h1 className="text-center">Let's Have Snacks!</h1>
        </section>
        <section className="dashboard full-height">
          <Container fluid className="overflow-auto">
            <Row>
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
              <Col xs={6} sm={5} md={5} lg={5} className="product-display">
                <Card>
                  <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                  </Card.Body>
                </Card>
                <br />
                <Card>
                  <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                  </Card.Body>
                </Card>
                <br />
                <Card>
                  <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="assets/images/vegetablejuice.jpg" />
                  <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={5} md={5} lg={5} className="order-tray">
                <h3 className="text-center">Food On Tray</h3>
                <Table>
                  <thead>
                    <tr>
                      <th>Dish</th>
                      <th className="text-center">Quantity x Price</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>eewew</td>
                      <td className="text-center">3 x 100</td>
                      <td className="text-right" >300</td>
                    </tr>
                    <tr>
                      <td>eewew</td>
                      <td className="text-center">3 x 100</td>
                      <td className="text-right" >300</td>
                    </tr>
                    <tr>
                      <td>eewew</td>
                      <td className="text-center">3 x 100</td>
                      <td className="text-right" >300</td>
                    </tr>
                    <tr>
                      <td>eewew</td>
                      <td className="text-center">3 x 100</td>
                      <td className="text-right" >300</td>
                    </tr>
                    <tr>
                      <td>eewew</td>
                      <td className="text-center">3 x 100</td>
                      <td className="text-right" >300</td>
                    </tr>
                    <tr>
                      <td>eewew</td>
                      <td className="text-center">3 x 100</td>
                      <td className="text-right" >300</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2} className="text-right"><b>Total</b></td>
                      <td className="text-right">10000</td>
                    </tr>
                  </tfoot>
                </Table>

              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    )
  }
}

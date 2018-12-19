import React, { Component } from 'react'
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

class Alerts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }

    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss() {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Alerts</strong>
                <small>additional content</small>
              </CardHeader>
              <CardBody>
                <Alert color="success">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Alerts</strong>
                <small>dismissing</small>
              </CardHeader>
              <CardBody>
                <Alert
                  color="info"
                  isOpen={this.state.visible}
                  toggle={this.onDismiss}
                >
                  I am an alert and I can be dismissed!
                </Alert>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Alerts

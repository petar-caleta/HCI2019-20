import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import style from "../styles/ApartmentInfoStyle.module.css"

const ApartmentInfo = () => (
  <Container className={style.container}>
    <Row className={style.row}>
      <Col lg={8}>
        <ul className={style.column}>
          <span>APARTMENT TITLE</span>
          <li>
            <p>
              DESCRIPTION ABOUT APRTMENT GOES HERE DESCRIPTION ABOUT APRTMENT
              GOES HERE DESCRIPTION ABOUT APRTMENT GOES HERE DESCRIPTION ABOUT
              APRTMENT GOES HERE
            </p>
          </li>
        </ul>
      </Col>
      <ul className={style.column}>
        <span>Details</span>
        <li>
          <p>Price: 350$</p>
        </li>
        <li>
          <p>Age: 1979</p>
        </li>
        <li>
          <p>City: New York</p>
        </li>
        <li>
          <p>Owner: John Doe</p>
        </li>
        <li>
          <p>Phone number: XXX-XXX-XXX</p>
        </li>
      </ul>

      <Col lg={4}></Col>
    </Row>
  </Container>
)

export default ApartmentInfo

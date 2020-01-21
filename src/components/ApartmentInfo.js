import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import style from "../styles/ApartmentInfoStyle.module.css"

const ApartmentInfo = props => (
  <Container className={style.container}>
    <Row className={style.row}>
      <Col lg={8} style={{ padding: "0 4rem" }}>
        <ul className={style.column}>
          <span>{props.apartman.title}</span>
          <li>
            <p>{props.apartman.longDesc}</p>
          </li>
        </ul>
      </Col>

      <Col lg={4} style={{ padding: "0 4rem" }}>
        <ul className={style.column}>
          <span>Details</span>
          <li>
            <p>Price: {props.apartman.price}</p>
          </li>
          <li>
            <p>Age: {props.apartman.age}</p>
          </li>
          <li>
            <p>City: {props.apartman.city}</p>
          </li>
          <li>
            <p>Owner: {props.apartman.owner}</p>
          </li>
          <li>
            <p>Phone number: {props.apartman.contactNumber}</p>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
)

export default ApartmentInfo

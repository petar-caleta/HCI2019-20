import React from "react"
import style from "../styles/indexPageStyle.module.css"
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap"

const ApartmentCard = () => (
  <Container className={style.container}>
    <Row className={style.row}>
      <Col>
        <Image
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
          fluid
        />
      </Col>
      <Col>
        <Card style={{ width: "200" }}>
          <Card.Img
            variant="bottom"
            src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
            width="200"
            height="250"
          />
          <Card.Body>
            <Card.Title>Apartment1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {<Button variant="secondary">Go somewhere</Button>}
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className={style.row}>
      <Col>
        <Image
          src="https://r-cf.bstatic.com/images/hotel/max1280x900/134/134195468.jpg"
          fluid
        />
      </Col>
      <Col>
        <Card style={{ width: "200" }}>
          <Card.Img
            variant="bottom"
            src="https://r-cf.bstatic.com/images/hotel/max1280x900/134/134195468.jpg"
            width="200"
            height="250"
          />
          <Card.Body>
            <Card.Title>Apartment2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {<Button variant="secondary">Go somewhere</Button>}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default ApartmentCard

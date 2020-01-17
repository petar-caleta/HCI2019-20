import React from "react"
import style from "../styles/indexPageStyle.module.css"
import { Container, CardGroup, Card, Button } from "react-bootstrap"

const ApartmentCardGroup = () => (
  <Container className={style.container}>
    <CardGroup className={style.CardGroup}>
      <Card>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          {<Button variant="secondary">Go somewhere</Button>}
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          {<Button variant="secondary">Go somewhere</Button>}
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          {<Button variant="secondary">Go somewhere</Button>}
        </Card.Footer>
      </Card>
    </CardGroup>
  </Container>
)

export default ApartmentCardGroup

import React from "react"
import style from "../styles/indexPageStyle.module.css"
import { Container, CardGroup, Card, Button } from "react-bootstrap"

const ApartmentCardGroup = () => (
  <Container className={style.container}>
    <CardGroup className={style.CardGroup}>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          {
            <Button
              style={{ width: "100%", margin: "0 .3rem" }}
              variant="secondary"
            >
              Visit
            </Button>
          }
        </Card.Footer>
      </Card>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          {
            <Button
              style={{ width: "100%", margin: "0 .3rem" }}
              variant="secondary"
            >
              Visit
            </Button>
          }
        </Card.Footer>
      </Card>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          {
            <Button
              style={{ width: "100%", margin: "0 .3rem" }}
              variant="secondary"
            >
              Visit
            </Button>
          }
        </Card.Footer>
      </Card>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          {
            <Button
              style={{ width: "100%", margin: "0 .3rem" }}
              variant="secondary"
            >
              Visit
            </Button>
          }
        </Card.Footer>
      </Card>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          {
            <Button
              style={{ width: "100%", margin: "0 .3rem" }}
              variant="secondary"
            >
              Visit
            </Button>
          }
        </Card.Footer>
      </Card>
    </CardGroup>
  </Container>
)

export default ApartmentCardGroup

import React from "react"
import style from "../styles/indexPageStyle.module.css"
import { Container, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap"

const ApartmentButtonGroup = () => (
  <Container className={styleMedia.container}>
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup aria-label="First group">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </Container>
)

export default ApartmentButtonGroup

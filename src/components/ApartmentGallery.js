import React from "react"
import { Container, Carousel } from "react-bootstrap"
import style from "../styles/ApartmentGalleryStyle.module.css"
import "../styles/global.css"

const ApartmentGallery = props => (
  <>
    <Container className={style.container}>
      <Carousel>
        {/* ##### FIRST SLIDE ##### */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.apartman.img1}
            alt="First slide"
            width="800"
            height="600"
          />
        </Carousel.Item>

        {/* ##### SECOND SLIDE ##### */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.apartman.img2}
            // src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
            width="800"
            height="600"
          />
        </Carousel.Item>

        {/* ##### THIRD SLIDE ##### */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.apartman.img3}
            // src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
            width="800"
            height="600"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  </>
)

export default ApartmentGallery

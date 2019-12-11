import React from "react"
import Layout from "../components/layout"
import ApartmentInfo from "../components/ApartmentInfo"
import ApartmentGallery from "../components/ApartmentGallery"

const apartment = () => (
  <>
    <Layout>
      <ApartmentGallery />
      <ApartmentInfo />
    </Layout>
  </>
)

export default apartment

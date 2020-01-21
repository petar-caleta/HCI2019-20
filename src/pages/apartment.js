import React from "react"
import Layout from "../components/layout"
import ApartmentInfo from "../components/ApartmentInfo"
import ApartmentGallery from "../components/ApartmentGallery"

const apartment = ({ location }) => {
  return (
    <>
      <Layout>
        <ApartmentGallery apartman={location.state.props} />
        <ApartmentInfo apartman={location.state.props} />
      </Layout>
    </>
  )
}

export default apartment

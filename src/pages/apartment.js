import React from "react"
import Layout from "../components/layout"
import ApartmentInfo from "../components/ApartmentInfo"
import ApartmentGallery from "../components/ApartmentGallery"

const apartment = ({ location }) => {
  let apartman = {}
  if (typeof window !== `undefined`) {
    apartman = location.state.props
  }
  return (
    <>
      <Layout>
        <ApartmentGallery apartman={apartman} />
        <ApartmentInfo apartman={apartman} />
      </Layout>
    </>
  )
}

export default apartment

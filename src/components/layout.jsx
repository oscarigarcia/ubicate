import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "react-particles-js"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, background }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          backgroundColor: "#0cbaba",
          backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
          position: "relative",
          height: "75rem",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 150,
              },
              size: {
                value: 5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <main style={{ position: "relative", top: "-30rem" }}>{children}</main>
      </div>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

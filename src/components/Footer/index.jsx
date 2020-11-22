import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { Icon, FooterParent } from "./styles"
import iconFacebook from "../../assets/facebook-color.svg"
import logoBarrio from "../../assets/logo-barrio.png"
import iconInstagram from "../../assets/instagram-color.svg"

const Footer = () => {
  return (
    <FooterParent className="bg-dark">
      <Container>
        <Row className="pt-5">
          <Col sm={12} md={12} lg={4} className="padding-top">
            <img src={logoBarrio} width="200" height="200" alt="logo" />
          </Col>
          <Col sm={12} md={12} lg={4} className="padding-top d-flex styles">
            <div style={{ marginRight: "1rem" }}>
              <h2> Misión</h2>
              <p>
                Lorem ipsum es el texto que se usa habitualmente en diseño
                gráfico en demostraciones de tipografías o de borradores de
                diseño
              </p>
            </div>

            <div style={{ marginRight: "1rem" }}>
              <h2> Visión</h2>
              <p>
                Lorem ipsum es el texto que se usa habitualmente en diseño
                gráfico en demostraciones de tipografías o de borradores de
                diseño
              </p>
            </div>

            <div>
              <h2> valores</h2>
              <p>
                Lorem ipsum es el texto que se usa habitualmente en diseño
                gráfico en demostraciones de tipografías o de borradores de
                diseño
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div style={{ display: "flex", justifyContent: " center" }}>
              <Icon
                src={iconFacebook}
                alt="Red social whatsApp"
                role="button"
              />
              <Icon
                src={iconInstagram}
                alt="Red social instagram"
                role="button"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </FooterParent>
  )
}

export default Footer

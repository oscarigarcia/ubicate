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
            <div style={{ marginRight: "1rem" }}>
              <h2 className="text-light"> Misión</h2>
              <p className="text-light">
                Brindar a los usuarios una vista satelital con panorama de
                calles y destinos. Gracias a las funciones de reconocimiento
                óptico de caracteres. Garantizar el acceso de los usuarios a la
                información sobre la gestión rutas de santo domingo este, como
                una forma de validar la transparencia de la institución.
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4} className="padding-top d-flex styles">
            <div style={{ marginRight: "1rem" }}>
              <h2> Visión</h2>
              <p>
                Ser reconocida como la plataforma líder en materia de ubicación
                y gestión de transporte público metropolitano de la República
                Dominicana.
              </p>
            </div>
            <div>
              <h2> valores</h2>
              <p>
                Transparencia Ética Profesionalidad Calidad del Servicio
                Compromiso
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

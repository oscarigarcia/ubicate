import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { Icon } from "../Footer/styles"
import iconFacebook from "../../assets/facebook-color.svg"
import iconInstagram from "../../assets/instagram-color.svg"
import oscary from "../../assets/Oscary.png"
import wenller from "../../assets/wenller.jpeg"
import jhonatan from "../../assets/jhonatan.jpeg"

export const P = styled.p`
  margin-top: 5rem;
  font-family: cursive;
  font-size: 2rem;
  margin-bottom: 1rem;
`
export const ImageCircular = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`

export const Label = styled.p`
  font-size: 24px;
  padding: 11px;
  font-style: italic;
  color: white;
  font-weight: 800;
`

const Support = () => {
  return (
    <Container>
      <Row>
        <div
          style={{
            paddingBottom: "3rem",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <h1 style={{ fontSize: "2.5rem" }} className="text-light">
            El 99% de nuestras solicitudes son respondidas dentro de las 24
            horas. Nuestro Soporte es ilimitado y GRATIS.
          </h1>
        </div>
      </Row>
      <Row>
        <Col sm={12} lg={4}>
          <div>
            <ImageCircular src={oscary} alt="oscary" />
            <Label className="mt-3"> CTO - Oscary García</Label>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <ImageCircular src={wenller} alt="wenller" />
          <Label className="mt-3"> COO - Wenllers Mejía</Label>
        </Col>
        <Col sm={12} lg={4}>
          <ImageCircular src={jhonatan} alt="jhonatan" />
          <Label className="mt-3"> CEO - Jhonnatan Barreiro </Label>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <div className="text-lg-center text-capitalize text-light mt-5">
          <h1>Se puede contactar con nosotros mediante</h1>
          <h3>Teléfono: 809-222-4545 Y 829-999-2020</h3>
          <P>REDES SOCIALES</P>
          <span>
            https://www.facebook.com/ubicate/{" "}
            <Icon src={iconFacebook} alt="Red social whatsApp" role="button" />
          </span>
          <span>
            https://www.instagram.com/ubicate/
            <Icon
              src={iconInstagram}
              alt="Red social instagram"
              role="button"
            />
          </span>
        </div>
      </Row>
    </Container>
  )
}

export default Support

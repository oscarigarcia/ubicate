import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import styled from "styled-components"

export const Description = styled.div`
  color: #ffff;
  font-style: oblique;
  display: flex;
  font-size: 20px;
  margin: 0px 0 1rem 0rem;
  padding: 1rem;
  font-weight: 700;
`

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={4}>
          <Description>
            <span>Bomba de los minas - Pista 1</span>
            <span>Pasaje: 30.00RD$</span>
            <span>T.Promedio: 25mint</span>
          </Description>
          <iframe
            height="400"
            width="400"
            src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAFzqMaFfgfeQMXYCBIgsGImcgcTu_P5Do&origin=18.509800,+-69.869626&destination=18.505899,+-69.813223"
            frameBorder="0"
            title="Dirección"
            allowFullScreen
          />
        </Col>
        <Col sm={12} md={4}>
          <Description>
            <span>Duarte con parís - Villa Faro</span>
            <span>Pasaje: 35.00RD$</span>
            <span>T.Promedio: 40mint</span>
          </Description>
          <iframe
            height="400"
            width="400"
            src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAFzqMaFfgfeQMXYCBIgsGImcgcTu_P5Do&origin=18.499451,+-69.836692&destination=18.485520,+-69.890704"
            frameBorder="0"
            title="Dirección"
            allowFullScreen
          />
        </Col>
        <Col sm={12} md={4}>
          <Description>
            <span>Mega centro - Pista 1, Amov</span>
            <span>Pasaje: 30.00RD$</span>
            <span>T.Promedio: 30mint</span>
          </Description>
          <iframe
            height="400"
            width="400"
            src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAFzqMaFfgfeQMXYCBIgsGImcgcTu_P5Do&origin=18.505981,+-69.855433&destination=18.516175,+-69.816414"
            frameBorder="0"
            title="Dirección"
            allowFullScreen
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <Description>
            <span> Bomba de los minas- Parque del Este</span>
            <span>Pasaje: 30.00RD$</span>
            <span>T.Promedio: 20mint</span>
          </Description>
          <iframe
            height="400"
            width="400"
            src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAFzqMaFfgfeQMXYCBIgsGImcgcTu_P5Do&origin=18.509800,+-69.869626&&destination=18.483060,+-69.854715"
            frameBorder="0"
            title="Dirección"
            allowFullScreen
          />
        </Col>
        <Col sm={12} md={4}>
          <Description>
            <span>Duarte con París- 27 de febrero</span>
            <span>Pasaje: 30.00RD$</span>
            <span>T.Promedio: 15mint</span>
          </Description>
          <iframe
            height="400"
            width="400"
            src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAFzqMaFfgfeQMXYCBIgsGImcgcTu_P5Do&origin=18.485520,+-69.890704&destination=18.460423,+-69.940119"
            frameBorder="0"
            title="Dirección"
            allowFullScreen
          />
        </Col>
        <Col sm={12} md={4}>
          <Description>
            <span>Lopez de vega - La julia</span>
            <span>Pasaje: 30.00RD$</span>
            <span>T.Promedio: 15mint</span>
          </Description>
          <iframe
            height="400"
            width="400"
            src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAFzqMaFfgfeQMXYCBIgsGImcgcTu_P5Do&origin=18.476492,+-69.931382&destination=18.459295,+-69.926676"
            frameBorder="0"
            title="Dirección"
            allowFullScreen
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Home

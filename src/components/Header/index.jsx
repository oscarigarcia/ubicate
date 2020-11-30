import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, Container } from "react-bootstrap"
import styled from "styled-components"

import logoBarrio from "../../assets/logo-barrio.png"

export const LinkPage = styled(Nav.Link)`
  color: #ffff;
  font-family: cabin;
  ${props => props.footer && "color: #fff;"}
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  &:hover {
    color: #26a071;
  }
  @media (max-width: 768px) {
    text-align: center;
    border: none;
  }
`
export const CallToAction = styled(Nav.Link)`
  background: rgba(0, 221, 148, 0.05);
  border-radius: 4px;
  border: 1px solid #00b77a;
  box-sizing: border-box;
  color: #26a071;
  font-family: ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 1.5px;
  &:hover {
    color: #26a071;
  }
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`
export const NavbarContainer = styled(Navbar)`
  box-shadow: 0px 4px 4px rgba(110, 126, 242, 0.15);
  padding-bottom: 0px;
  background-color: #0cbaba;
  background-image: linear-gradient(300deg, #380036 0%, #0cbaba 90%);
`
const Header = () => {
  return (
    <NavbarContainer expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logoBarrio} width="200" height="200" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <LinkPage href="/soporte/">Soporte</LinkPage>
        </Navbar.Collapse>
      </Container>
    </NavbarContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

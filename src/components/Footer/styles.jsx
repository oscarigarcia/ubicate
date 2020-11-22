import styled from "styled-components"

export const FooterParent = styled.footer`
  @media (max-width: 375px) {
    padding-top: 3rem;
  }
  .logo-horizontal {
    width: 130px;
    margin-right: 2rem;
    cursor: pointer;
    @media (max-width: 320px) {
      margin-right: 0rem;
    }
  }
  .padding-top {
    @media (max-width: 768px) {
      padding-top: 3rem;
    }
  }
  .styles {
    color: #fff;
  }
  .none {
    cursor: default;
    &:hover {
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (min-width: 1024px) {
    .ptSecond {
      padding-top: 38px;
    }
  }
`
export const Icon = styled.img`
  height: 55px;
`
export const LinkContainer = styled.div`
  display: inline-block;
`

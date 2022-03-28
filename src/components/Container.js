import React from "react"
import { ContainerWrapper } from "../elements/ContainerElements"
import { Nav, Footer } from "./index"

export const Container = ({ children }) => (
  <ContainerWrapper>
    <Nav />
    {children}
    <Footer />
  </ContainerWrapper>
)

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 1000px;
  color: #1f1f1f;
  font-family: Graphik Web, Helvetica Neue, Helvetica, Arial, sans-serif;
`

export default ({ children }) => <Container>{children}</Container>

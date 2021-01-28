import React, { useContext } from "react"

import Layout from "../components/layout"
import { IdentityContext } from "../../identity-context"

const IndexPage = () => {
  const { user, identity } = useContext(IdentityContext)
  return (
    <Layout>
      <h1>Hello World</h1>
      <button onClick={() => identity.open()}>HEEEEY</button>
    </Layout>
  )
}

export default IndexPage

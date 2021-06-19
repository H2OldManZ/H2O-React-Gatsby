import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Page({ data }) {
  const page = data.contentfulPage
  return (
    <Layout pageTitle={"H2O Indiana - " + page.name } data={data}>
        
      <h1>{page.name}</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    contentfulPage( slug: { eq: $slug }) {
      name
    }
    allContentfulNavbar(sort: {fields: order}, filter: {enabled: {eq: true}}) {
        nodes {
          contentfulchildren
          name
          order
          links
        }
      }
  }
`
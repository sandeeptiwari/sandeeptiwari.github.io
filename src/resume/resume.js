import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "Sandeep Tiwari.docx"}) {
        publicURL
        name
      }
    }
  `)
  return <a href={data.file.publicURL} download>Resume {data.file.name}</a>
}

export default Resume

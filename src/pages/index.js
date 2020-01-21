import React from "react"
import { graphql } from "gatsby"
import Search from "../components/SearchContainer"


export default ({ data }) => {
  return (
    <div className="container-fluid">
        <Search />
    </div>
  )
}


export const query = graphql`
  query{
  allInternalPosts {
    edges {
      node {
        id
        results {
          name {
            title
            first
            last
          }
          gender
          email
          phone
          cell
          nat
          picture {
            large
            medium
            thumbnail
          }
          location {
            street{number name}
            city
            state
          }
        }
      }
    }
  }
}
`

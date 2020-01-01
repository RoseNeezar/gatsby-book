import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BookItem from "../components/BookItem"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const LinkButton = styled.div`
  text-align: right;
  a {
    padding: 8px;
    background-color: rebeccapurple;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    &:hover {
      background-color: indigo;
    }
  }
`

const IndexPage = props => {
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <BookItem
          key={edge.node.id}
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
          authorName={edge.node.author.name}
        >
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>Join here</Link>
          </LinkButton>
        </BookItem>
      ))}
    </Layout>
  )
}
export const query = graphql`
  {
    allBook {
      edges {
        node {
          summary
          title
          id
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import BookItem from "../components/BookItem"

const bookTemplate = props => (
  <Layout>
    <BookItem
      authorName={props.pageContext.author.name}
      bookSummary={props.pageContext.summary}
      bookTitle={props.pageContext.title}
    />
  </Layout>
)

export default bookTemplate

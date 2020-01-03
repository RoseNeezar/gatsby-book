import React from "react"
import styled from "styled-components"

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: white;
  margin-bottom: 8px;
  display: flex;
  h2 {
    small {
      font-size: 14px;
      padding-left: 8px;
      font-weight: normal;
    }
  }
`
const BookImgWrapper = styled.div`
  max-width: 200px;
  img {
    max-width: 200px;
  }
`
const BookContentWrapper = styled.div`
  flex-grow: 1;
  padding-left
`

export const BookItem = ({
  authorName,
  bookSummary,
  bookTitle,
  children,
  bookCover,
}) => {
  return (
    <BookItemWrapper>
      <BookImgWrapper>
        <img src={bookCover} alt="Book cover" />
      </BookImgWrapper>
      <BookContentWrapper>
        <h2>
          {bookTitle} <small>{authorName}</small>
        </h2>
        <p>{bookSummary}</p>
        <div>{children}</div>
      </BookContentWrapper>
    </BookItemWrapper>
  )
}

export default BookItem

import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetAllBooks {
    getAllBooks {
      _id
      title
    }
  }
`;

export const GET_BOOK_DETAIL = gql`
  query GetBook($_id: String!) {
    getBook(_id: $_id) {
      _id
      title
      author
      description
      release_year
      genre
    }
  }
`;

export const NEW_BOOK = gql`
  mutation CreateBook(
    $title: String!
    $author: String!
    $description: String!
    $release_year: Int!
    $genre: String!
  ) {
    createBook(
      title: $title
      author: $author
      description: $description
      release_year: $release_year
      genre: $genre
    ) {
      _id
      title
      author
      description
      release_year
      genre
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook(
    $_id: ID!
    $title: String!
    $author: String!
    $description: String!
    $release_year: Int!
    $genre: String!
  ) {
    updateBook(
      _id: $_id
      title: $title
      author: $author
      description: $description
      release_year: $release_year
      genre: $genre
    ) {
      _id
      title
      author
      description
      release_year
      genre
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($_id: String!) {
    deleteBook(_id: $_id)
  }
`;

const books = {
  NEW_BOOK,
  GET_BOOKS,
  GET_BOOK_DETAIL,
  UPDATE_BOOK,
  DELETE_BOOK,
};

export default books;

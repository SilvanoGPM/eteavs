import { gql } from 'graphql-request';

export const GET_HOME_INFO = gql`
  query getHomeInfo($first: IntType) {
    home {
      introduction
      aboutUs

      teachingEmResume
      teachingEm

      teachingSubResume
      teachingSub

      teachingEadResume
      teachingEad
    }

    allBlogs(first: $first, orderBy: _createdAt_DESC) {
      slug
      _createdAt
      title
      thumbnail {
        url
      }
    }
  }
`;

export const FIND_NEWS = gql`
  query findNews($first: IntType, $skip: IntType) {
    allBlogs(first: $first, skip: $skip, orderBy: _createdAt_DESC) {
      slug
      _createdAt
      _updatedAt
      title
      resume
      content
      thumbnail {
        url
      }
    }

    _allBlogsMeta {
      count
    }
  }
`;

export const GET_NEWS = gql`
  query getNews($slug: String) {
    blog(filter: { slug: { eq: $slug } }) {
      slug
      _createdAt
      _updatedAt
      title
      resume
      content
      thumbnail {
        url
        alt
      }
    }
  }
`;

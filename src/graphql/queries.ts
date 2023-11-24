import { gql } from 'graphql-request';

export const GET_HOME_INFO = gql`
  query getHomeInfo($newsFirst: IntType, $photosFirst: IntType) {
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

    allBlogs(first: $newsFirst, orderBy: _createdAt_DESC) {
      slug
      _createdAt
      title
      thumbnail {
        url
      }
    }

    allPhotos(first: $photosFirst, orderBy: _createdAt_DESC) {
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

export const FIND_PHOTOS = gql`
  query findPhotos($first: IntType, $skip: IntType) {
    allPhotos(first: $first, skip: $skip, orderBy: _createdAt_DESC) {
      slug
      _createdAt
      _updatedAt
      title
      description
      thumbnail {
        url
        alt
      }
      images {
        url
      }
    }

    _allPhotosMeta {
      count
    }
  }
`;

export const GET_PHOTO = gql`
  query getPhoto($slug: String) {
    photo(filter: { slug: { eq: $slug } }) {
      slug
      _createdAt
      _updatedAt
      title
      description
      thumbnail {
        url
        alt
      }
      images {
        url
      }
    }
  }
`;

import { gql } from 'graphql-request';

export const GET_HOME_INFO = gql`
  query getHomeInfo {
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
  }
`;

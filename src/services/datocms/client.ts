import {
  request as graphqlRequest,
  RequestDocument,
  Variables,
} from 'graphql-request';

import { TypedDocumentNode } from '@graphql-typed-document-node/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
) {
  return graphqlRequest<TDocument, Variables>(
    'https://graphql.datocms.com/',
    document,
    variables,
    {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
  );
}

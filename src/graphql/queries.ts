/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    title
    content
    imageUrl
    createdAt
    updatedAt
    expertID
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      imageUrl
      createdAt
      updatedAt
      expertID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
export const articlesByExpertID = /* GraphQL */ `query ArticlesByExpertID(
  $expertID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  articlesByExpertID(
    expertID: $expertID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      imageUrl
      createdAt
      updatedAt
      expertID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ArticlesByExpertIDQueryVariables,
  APITypes.ArticlesByExpertIDQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    responseId
    rating
    feedback
    createdAt
    userID
    expertID
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      responseId
      rating
      feedback
      createdAt
      userID
      expertID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
export const reviewsByUserID = /* GraphQL */ `query ReviewsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  reviewsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      responseId
      rating
      feedback
      createdAt
      userID
      expertID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReviewsByUserIDQueryVariables,
  APITypes.ReviewsByUserIDQuery
>;
export const reviewsByExpertID = /* GraphQL */ `query ReviewsByExpertID(
  $expertID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  reviewsByExpertID(
    expertID: $expertID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      responseId
      rating
      feedback
      createdAt
      userID
      expertID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReviewsByExpertIDQueryVariables,
  APITypes.ReviewsByExpertIDQuery
>;
export const getResponse = /* GraphQL */ `query GetResponse($id: ID!) {
  getResponse(id: $id) {
    id
    responseText
    responseStatus
    createdAt
    healthconcernID
    expertID
    ResponseReview {
      id
      responseId
      rating
      feedback
      createdAt
      userID
      expertID
      updatedAt
      __typename
    }
    updatedAt
    responseResponseReviewId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResponseQueryVariables,
  APITypes.GetResponseQuery
>;
export const listResponses = /* GraphQL */ `query ListResponses(
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      responseText
      responseStatus
      createdAt
      healthconcernID
      expertID
      updatedAt
      responseResponseReviewId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResponsesQueryVariables,
  APITypes.ListResponsesQuery
>;
export const responsesByHealthconcernID = /* GraphQL */ `query ResponsesByHealthconcernID(
  $healthconcernID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesByHealthconcernID(
    healthconcernID: $healthconcernID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      responseText
      responseStatus
      createdAt
      healthconcernID
      expertID
      updatedAt
      responseResponseReviewId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResponsesByHealthconcernIDQueryVariables,
  APITypes.ResponsesByHealthconcernIDQuery
>;
export const responsesByExpertID = /* GraphQL */ `query ResponsesByExpertID(
  $expertID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesByExpertID(
    expertID: $expertID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      responseText
      responseStatus
      createdAt
      healthconcernID
      expertID
      updatedAt
      responseResponseReviewId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResponsesByExpertIDQueryVariables,
  APITypes.ResponsesByExpertIDQuery
>;
export const getExpert = /* GraphQL */ `query GetExpert($id: ID!) {
  getExpert(id: $id) {
    id
    firstName
    lastName
    email
    mobile
    education
    introduction
    profilePictureUrl
    experience
    averageRating
    totalReviews
    ExpertResponse {
      nextToken
      __typename
    }
    ExpertReview {
      nextToken
      __typename
    }
    profileStatus
    ExpertArticles {
      nextToken
      __typename
    }
    Specialization
    ConsultationFee
    LanguageSpoken
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetExpertQueryVariables, APITypes.GetExpertQuery>;
export const listExperts = /* GraphQL */ `query ListExperts(
  $filter: ModelExpertFilterInput
  $limit: Int
  $nextToken: String
) {
  listExperts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      mobile
      education
      introduction
      profilePictureUrl
      experience
      averageRating
      totalReviews
      profileStatus
      Specialization
      ConsultationFee
      LanguageSpoken
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpertsQueryVariables,
  APITypes.ListExpertsQuery
>;
export const getHealthConcern = /* GraphQL */ `query GetHealthConcern($id: ID!) {
  getHealthConcern(id: $id) {
    id
    title
    description
    concernStatus
    attachments
    createdAt
    userID
    HealthConcernResponses {
      nextToken
      __typename
    }
    HealthConcernExpert {
      id
      firstName
      lastName
      email
      mobile
      education
      introduction
      profilePictureUrl
      experience
      averageRating
      totalReviews
      profileStatus
      Specialization
      ConsultationFee
      LanguageSpoken
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    healthConcernHealthConcernExpertId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHealthConcernQueryVariables,
  APITypes.GetHealthConcernQuery
>;
export const listHealthConcerns = /* GraphQL */ `query ListHealthConcerns(
  $filter: ModelHealthConcernFilterInput
  $limit: Int
  $nextToken: String
) {
  listHealthConcerns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      concernStatus
      attachments
      createdAt
      userID
      updatedAt
      healthConcernHealthConcernExpertId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHealthConcernsQueryVariables,
  APITypes.ListHealthConcernsQuery
>;
export const healthConcernsByUserID = /* GraphQL */ `query HealthConcernsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelHealthConcernFilterInput
  $limit: Int
  $nextToken: String
) {
  healthConcernsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      concernStatus
      attachments
      createdAt
      userID
      updatedAt
      healthConcernHealthConcernExpertId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HealthConcernsByUserIDQueryVariables,
  APITypes.HealthConcernsByUserIDQuery
>;
export const getFamilyMember = /* GraphQL */ `query GetFamilyMember($id: ID!) {
  getFamilyMember(id: $id) {
    id
    firstName
    lastName
    weight
    height
    dob
    relation
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFamilyMemberQueryVariables,
  APITypes.GetFamilyMemberQuery
>;
export const listFamilyMembers = /* GraphQL */ `query ListFamilyMembers(
  $filter: ModelFamilyMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listFamilyMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      weight
      height
      dob
      relation
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFamilyMembersQueryVariables,
  APITypes.ListFamilyMembersQuery
>;
export const familyMembersByUserID = /* GraphQL */ `query FamilyMembersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFamilyMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  familyMembersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      firstName
      lastName
      weight
      height
      dob
      relation
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FamilyMembersByUserIDQueryVariables,
  APITypes.FamilyMembersByUserIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    lastName
    email
    dob
    mobile
    address
    height
    weight
    subscriptionStatus
    UserFamilyMembers {
      nextToken
      __typename
    }
    UserHealthConcerns {
      nextToken
      __typename
    }
    UserReviews {
      nextToken
      __typename
    }
    profilePictureUrl
    profileStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      dob
      mobile
      address
      height
      weight
      subscriptionStatus
      profilePictureUrl
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;

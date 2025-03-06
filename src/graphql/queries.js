/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
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
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
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
`;
export const reviewsByUserID = /* GraphQL */ `
  query ReviewsByUserID(
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
`;
export const reviewsByExpertID = /* GraphQL */ `
  query ReviewsByExpertID(
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
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
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
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
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
`;
export const responsesByHealthconcernID = /* GraphQL */ `
  query ResponsesByHealthconcernID(
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
`;
export const responsesByExpertID = /* GraphQL */ `
  query ResponsesByExpertID(
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
`;
export const getExpert = /* GraphQL */ `
  query GetExpert($id: ID!) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listExperts = /* GraphQL */ `
  query ListExperts(
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHealthConcern = /* GraphQL */ `
  query GetHealthConcern($id: ID!) {
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
      updatedAt
      __typename
    }
  }
`;
export const listHealthConcerns = /* GraphQL */ `
  query ListHealthConcerns(
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const healthConcernsByUserID = /* GraphQL */ `
  query HealthConcernsByUserID(
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFamilyMember = /* GraphQL */ `
  query GetFamilyMember($id: ID!) {
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
`;
export const listFamilyMembers = /* GraphQL */ `
  query ListFamilyMembers(
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
`;
export const familyMembersByUserID = /* GraphQL */ `
  query FamilyMembersByUserID(
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
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
    onCreateReview(filter: $filter) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
    onUpdateReview(filter: $filter) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
    onDeleteReview(filter: $filter) {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onCreateResponse(filter: $filter) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onUpdateResponse(filter: $filter) {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($filter: ModelSubscriptionResponseFilterInput) {
    onDeleteResponse(filter: $filter) {
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
export const onCreateExpert = /* GraphQL */ `
  subscription OnCreateExpert($filter: ModelSubscriptionExpertFilterInput) {
    onCreateExpert(filter: $filter) {
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
export const onUpdateExpert = /* GraphQL */ `
  subscription OnUpdateExpert($filter: ModelSubscriptionExpertFilterInput) {
    onUpdateExpert(filter: $filter) {
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
export const onDeleteExpert = /* GraphQL */ `
  subscription OnDeleteExpert($filter: ModelSubscriptionExpertFilterInput) {
    onDeleteExpert(filter: $filter) {
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
export const onCreateHealthConcern = /* GraphQL */ `
  subscription OnCreateHealthConcern(
    $filter: ModelSubscriptionHealthConcernFilterInput
  ) {
    onCreateHealthConcern(filter: $filter) {
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
export const onUpdateHealthConcern = /* GraphQL */ `
  subscription OnUpdateHealthConcern(
    $filter: ModelSubscriptionHealthConcernFilterInput
  ) {
    onUpdateHealthConcern(filter: $filter) {
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
export const onDeleteHealthConcern = /* GraphQL */ `
  subscription OnDeleteHealthConcern(
    $filter: ModelSubscriptionHealthConcernFilterInput
  ) {
    onDeleteHealthConcern(filter: $filter) {
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
export const onCreateFamilyMember = /* GraphQL */ `
  subscription OnCreateFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onCreateFamilyMember(filter: $filter) {
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
export const onUpdateFamilyMember = /* GraphQL */ `
  subscription OnUpdateFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onUpdateFamilyMember(filter: $filter) {
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
export const onDeleteFamilyMember = /* GraphQL */ `
  subscription OnDeleteFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onDeleteFamilyMember(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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

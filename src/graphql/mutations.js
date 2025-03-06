/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
export const createExpert = /* GraphQL */ `
  mutation CreateExpert(
    $input: CreateExpertInput!
    $condition: ModelExpertConditionInput
  ) {
    createExpert(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateExpert = /* GraphQL */ `
  mutation UpdateExpert(
    $input: UpdateExpertInput!
    $condition: ModelExpertConditionInput
  ) {
    updateExpert(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteExpert = /* GraphQL */ `
  mutation DeleteExpert(
    $input: DeleteExpertInput!
    $condition: ModelExpertConditionInput
  ) {
    deleteExpert(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHealthConcern = /* GraphQL */ `
  mutation CreateHealthConcern(
    $input: CreateHealthConcernInput!
    $condition: ModelHealthConcernConditionInput
  ) {
    createHealthConcern(input: $input, condition: $condition) {
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
export const updateHealthConcern = /* GraphQL */ `
  mutation UpdateHealthConcern(
    $input: UpdateHealthConcernInput!
    $condition: ModelHealthConcernConditionInput
  ) {
    updateHealthConcern(input: $input, condition: $condition) {
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
export const deleteHealthConcern = /* GraphQL */ `
  mutation DeleteHealthConcern(
    $input: DeleteHealthConcernInput!
    $condition: ModelHealthConcernConditionInput
  ) {
    deleteHealthConcern(input: $input, condition: $condition) {
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
export const createFamilyMember = /* GraphQL */ `
  mutation CreateFamilyMember(
    $input: CreateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    createFamilyMember(input: $input, condition: $condition) {
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
export const updateFamilyMember = /* GraphQL */ `
  mutation UpdateFamilyMember(
    $input: UpdateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    updateFamilyMember(input: $input, condition: $condition) {
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
export const deleteFamilyMember = /* GraphQL */ `
  mutation DeleteFamilyMember(
    $input: DeleteFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    deleteFamilyMember(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;

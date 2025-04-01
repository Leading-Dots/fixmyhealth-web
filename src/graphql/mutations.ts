/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createReport = /* GraphQL */ `mutation CreateReport(
  $input: CreateReportInput!
  $condition: ModelReportConditionInput
) {
  createReport(input: $input, condition: $condition) {
    id
    fileUrl
    fileName
    fileType
    createdAt
    userID
    appointmentID
    healthConcernID
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportMutationVariables,
  APITypes.CreateReportMutation
>;
export const updateReport = /* GraphQL */ `mutation UpdateReport(
  $input: UpdateReportInput!
  $condition: ModelReportConditionInput
) {
  updateReport(input: $input, condition: $condition) {
    id
    fileUrl
    fileName
    fileType
    createdAt
    userID
    appointmentID
    healthConcernID
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportMutationVariables,
  APITypes.UpdateReportMutation
>;
export const deleteReport = /* GraphQL */ `mutation DeleteReport(
  $input: DeleteReportInput!
  $condition: ModelReportConditionInput
) {
  deleteReport(input: $input, condition: $condition) {
    id
    fileUrl
    fileName
    fileType
    createdAt
    userID
    appointmentID
    healthConcernID
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportMutationVariables,
  APITypes.DeleteReportMutation
>;
export const createAppointment = /* GraphQL */ `mutation CreateAppointment(
  $input: CreateAppointmentInput!
  $condition: ModelAppointmentConditionInput
) {
  createAppointment(input: $input, condition: $condition) {
    id
    concernType
    concernStatus
    appointmentDateTime
    startTime
    endTime
    status
    location
    meetingLink
    phoneNumber
    createdAt
    updatedAt
    expertID
    reports {
      nextToken
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAppointmentMutationVariables,
  APITypes.CreateAppointmentMutation
>;
export const updateAppointment = /* GraphQL */ `mutation UpdateAppointment(
  $input: UpdateAppointmentInput!
  $condition: ModelAppointmentConditionInput
) {
  updateAppointment(input: $input, condition: $condition) {
    id
    concernType
    concernStatus
    appointmentDateTime
    startTime
    endTime
    status
    location
    meetingLink
    phoneNumber
    createdAt
    updatedAt
    expertID
    reports {
      nextToken
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAppointmentMutationVariables,
  APITypes.UpdateAppointmentMutation
>;
export const deleteAppointment = /* GraphQL */ `mutation DeleteAppointment(
  $input: DeleteAppointmentInput!
  $condition: ModelAppointmentConditionInput
) {
  deleteAppointment(input: $input, condition: $condition) {
    id
    concernType
    concernStatus
    appointmentDateTime
    startTime
    endTime
    status
    location
    meetingLink
    phoneNumber
    createdAt
    updatedAt
    expertID
    reports {
      nextToken
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAppointmentMutationVariables,
  APITypes.DeleteAppointmentMutation
>;
export const createArticle = /* GraphQL */ `mutation CreateArticle(
  $input: CreateArticleInput!
  $condition: ModelArticleConditionInput
) {
  createArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateArticleMutationVariables,
  APITypes.CreateArticleMutation
>;
export const updateArticle = /* GraphQL */ `mutation UpdateArticle(
  $input: UpdateArticleInput!
  $condition: ModelArticleConditionInput
) {
  updateArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateArticleMutationVariables,
  APITypes.UpdateArticleMutation
>;
export const deleteArticle = /* GraphQL */ `mutation DeleteArticle(
  $input: DeleteArticleInput!
  $condition: ModelArticleConditionInput
) {
  deleteArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteArticleMutationVariables,
  APITypes.DeleteArticleMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
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
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
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
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
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
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const createResponse = /* GraphQL */ `mutation CreateResponse(
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
` as GeneratedMutation<
  APITypes.CreateResponseMutationVariables,
  APITypes.CreateResponseMutation
>;
export const updateResponse = /* GraphQL */ `mutation UpdateResponse(
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
` as GeneratedMutation<
  APITypes.UpdateResponseMutationVariables,
  APITypes.UpdateResponseMutation
>;
export const deleteResponse = /* GraphQL */ `mutation DeleteResponse(
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
` as GeneratedMutation<
  APITypes.DeleteResponseMutationVariables,
  APITypes.DeleteResponseMutation
>;
export const createExpert = /* GraphQL */ `mutation CreateExpert(
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
    weeklySchedule {
      dayOfWeek
      isAvailable
      __typename
    }
    appointments {
      nextToken
      __typename
    }
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
    clinicLocation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExpertMutationVariables,
  APITypes.CreateExpertMutation
>;
export const updateExpert = /* GraphQL */ `mutation UpdateExpert(
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
    weeklySchedule {
      dayOfWeek
      isAvailable
      __typename
    }
    appointments {
      nextToken
      __typename
    }
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
    clinicLocation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExpertMutationVariables,
  APITypes.UpdateExpertMutation
>;
export const deleteExpert = /* GraphQL */ `mutation DeleteExpert(
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
    weeklySchedule {
      dayOfWeek
      isAvailable
      __typename
    }
    appointments {
      nextToken
      __typename
    }
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
    clinicLocation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExpertMutationVariables,
  APITypes.DeleteExpertMutation
>;
export const createHealthConcern = /* GraphQL */ `mutation CreateHealthConcern(
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
      clinicLocation
      createdAt
      updatedAt
      __typename
    }
    concernType
    reports {
      nextToken
      __typename
    }
    updatedAt
    healthConcernHealthConcernExpertId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHealthConcernMutationVariables,
  APITypes.CreateHealthConcernMutation
>;
export const updateHealthConcern = /* GraphQL */ `mutation UpdateHealthConcern(
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
      clinicLocation
      createdAt
      updatedAt
      __typename
    }
    concernType
    reports {
      nextToken
      __typename
    }
    updatedAt
    healthConcernHealthConcernExpertId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHealthConcernMutationVariables,
  APITypes.UpdateHealthConcernMutation
>;
export const deleteHealthConcern = /* GraphQL */ `mutation DeleteHealthConcern(
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
      clinicLocation
      createdAt
      updatedAt
      __typename
    }
    concernType
    reports {
      nextToken
      __typename
    }
    updatedAt
    healthConcernHealthConcernExpertId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHealthConcernMutationVariables,
  APITypes.DeleteHealthConcernMutation
>;
export const createFamilyMember = /* GraphQL */ `mutation CreateFamilyMember(
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
` as GeneratedMutation<
  APITypes.CreateFamilyMemberMutationVariables,
  APITypes.CreateFamilyMemberMutation
>;
export const updateFamilyMember = /* GraphQL */ `mutation UpdateFamilyMember(
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
` as GeneratedMutation<
  APITypes.UpdateFamilyMemberMutationVariables,
  APITypes.UpdateFamilyMemberMutation
>;
export const deleteFamilyMember = /* GraphQL */ `mutation DeleteFamilyMember(
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
` as GeneratedMutation<
  APITypes.DeleteFamilyMemberMutationVariables,
  APITypes.DeleteFamilyMemberMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
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
    profileStatus
    UserReports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
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
    profileStatus
    UserReports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
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
    profileStatus
    UserReports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;

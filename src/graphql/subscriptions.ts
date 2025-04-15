/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
    id
    userID
    expertID
    title
    body
    type
    fcmToken
    isSent
    isRead
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
    id
    userID
    expertID
    title
    body
    type
    fcmToken
    isSent
    isRead
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
    id
    userID
    expertID
    title
    body
    type
    fcmToken
    isSent
    isRead
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateAppointment = /* GraphQL */ `subscription OnCreateAppointment(
  $filter: ModelSubscriptionAppointmentFilterInput
) {
  onCreateAppointment(filter: $filter) {
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
    title
    description
    createdAt
    updatedAt
    healthConcernID
    expertID
    reports {
      nextToken
      __typename
    }
    expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      firstName
      lastName
      email
      dob
      mobile
      address
      height
      weight
      firebaseToken
      subscriptionStatus
      profilePictureUrl
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAppointmentSubscriptionVariables,
  APITypes.OnCreateAppointmentSubscription
>;
export const onUpdateAppointment = /* GraphQL */ `subscription OnUpdateAppointment(
  $filter: ModelSubscriptionAppointmentFilterInput
) {
  onUpdateAppointment(filter: $filter) {
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
    title
    description
    createdAt
    updatedAt
    healthConcernID
    expertID
    reports {
      nextToken
      __typename
    }
    expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      firstName
      lastName
      email
      dob
      mobile
      address
      height
      weight
      firebaseToken
      subscriptionStatus
      profilePictureUrl
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAppointmentSubscriptionVariables,
  APITypes.OnUpdateAppointmentSubscription
>;
export const onDeleteAppointment = /* GraphQL */ `subscription OnDeleteAppointment(
  $filter: ModelSubscriptionAppointmentFilterInput
) {
  onDeleteAppointment(filter: $filter) {
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
    title
    description
    createdAt
    updatedAt
    healthConcernID
    expertID
    reports {
      nextToken
      __typename
    }
    expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      firstName
      lastName
      email
      dob
      mobile
      address
      height
      weight
      firebaseToken
      subscriptionStatus
      profilePictureUrl
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAppointmentSubscriptionVariables,
  APITypes.OnDeleteAppointmentSubscription
>;
export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onCreateArticle(filter: $filter) {
    id
    title
    content
    imageUrl
    createdAt
    updatedAt
    expertID
    expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onUpdateArticle(filter: $filter) {
    id
    title
    content
    imageUrl
    createdAt
    updatedAt
    expertID
    expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
  onDeleteArticle(filter: $filter) {
    id
    title
    content
    imageUrl
    createdAt
    updatedAt
    expertID
    expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateResponse = /* GraphQL */ `subscription OnCreateResponse($filter: ModelSubscriptionResponseFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnCreateResponseSubscriptionVariables,
  APITypes.OnCreateResponseSubscription
>;
export const onUpdateResponse = /* GraphQL */ `subscription OnUpdateResponse($filter: ModelSubscriptionResponseFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateResponseSubscriptionVariables,
  APITypes.OnUpdateResponseSubscription
>;
export const onDeleteResponse = /* GraphQL */ `subscription OnDeleteResponse($filter: ModelSubscriptionResponseFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteResponseSubscriptionVariables,
  APITypes.OnDeleteResponseSubscription
>;
export const onCreateExpert = /* GraphQL */ `subscription OnCreateExpert($filter: ModelSubscriptionExpertFilterInput) {
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
    weeklySchedule {
      dayOfWeek
      isAvailable
      __typename
    }
    Specialization
    ConsultationFee
    LanguageSpoken
    clinicLocation
    firebaseToken
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
    HealthConcerns {
      nextToken
      __typename
    }
    Notifications {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExpertSubscriptionVariables,
  APITypes.OnCreateExpertSubscription
>;
export const onUpdateExpert = /* GraphQL */ `subscription OnUpdateExpert($filter: ModelSubscriptionExpertFilterInput) {
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
    weeklySchedule {
      dayOfWeek
      isAvailable
      __typename
    }
    Specialization
    ConsultationFee
    LanguageSpoken
    clinicLocation
    firebaseToken
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
    HealthConcerns {
      nextToken
      __typename
    }
    Notifications {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExpertSubscriptionVariables,
  APITypes.OnUpdateExpertSubscription
>;
export const onDeleteExpert = /* GraphQL */ `subscription OnDeleteExpert($filter: ModelSubscriptionExpertFilterInput) {
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
    weeklySchedule {
      dayOfWeek
      isAvailable
      __typename
    }
    Specialization
    ConsultationFee
    LanguageSpoken
    clinicLocation
    firebaseToken
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
    HealthConcerns {
      nextToken
      __typename
    }
    Notifications {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExpertSubscriptionVariables,
  APITypes.OnDeleteExpertSubscription
>;
export const onCreateHealthConcern = /* GraphQL */ `subscription OnCreateHealthConcern(
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
    preferredDate
    preferredTimeSlot
    user {
      id
      firstName
      lastName
      email
      dob
      mobile
      address
      height
      weight
      firebaseToken
      subscriptionStatus
      profilePictureUrl
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    HealthConcernResponses {
      nextToken
      __typename
    }
    expertId
    Expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHealthConcernSubscriptionVariables,
  APITypes.OnCreateHealthConcernSubscription
>;
export const onUpdateHealthConcern = /* GraphQL */ `subscription OnUpdateHealthConcern(
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
    preferredDate
    preferredTimeSlot
    user {
      id
      firstName
      lastName
      email
      dob
      mobile
      address
      height
      weight
      firebaseToken
      subscriptionStatus
      profilePictureUrl
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    HealthConcernResponses {
      nextToken
      __typename
    }
    expertId
    Expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHealthConcernSubscriptionVariables,
  APITypes.OnUpdateHealthConcernSubscription
>;
export const onDeleteHealthConcern = /* GraphQL */ `subscription OnDeleteHealthConcern(
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
    preferredDate
    preferredTimeSlot
    user {
      id
      firstName
      lastName
      email
      dob
      mobile
      address
      height
      weight
      firebaseToken
      subscriptionStatus
      profilePictureUrl
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    HealthConcernResponses {
      nextToken
      __typename
    }
    expertId
    Expert {
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
      Specialization
      ConsultationFee
      LanguageSpoken
      clinicLocation
      firebaseToken
      profileStatus
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHealthConcernSubscriptionVariables,
  APITypes.OnDeleteHealthConcernSubscription
>;
export const onCreateFamilyMember = /* GraphQL */ `subscription OnCreateFamilyMember(
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
` as GeneratedSubscription<
  APITypes.OnCreateFamilyMemberSubscriptionVariables,
  APITypes.OnCreateFamilyMemberSubscription
>;
export const onUpdateFamilyMember = /* GraphQL */ `subscription OnUpdateFamilyMember(
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
` as GeneratedSubscription<
  APITypes.OnUpdateFamilyMemberSubscriptionVariables,
  APITypes.OnUpdateFamilyMemberSubscription
>;
export const onDeleteFamilyMember = /* GraphQL */ `subscription OnDeleteFamilyMember(
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
` as GeneratedSubscription<
  APITypes.OnDeleteFamilyMemberSubscriptionVariables,
  APITypes.OnDeleteFamilyMemberSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
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
    firebaseToken
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
    appointments {
      nextToken
      __typename
    }
    Notifications {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
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
    firebaseToken
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
    appointments {
      nextToken
      __typename
    }
    Notifications {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
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
    firebaseToken
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
    appointments {
      nextToken
      __typename
    }
    Notifications {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;

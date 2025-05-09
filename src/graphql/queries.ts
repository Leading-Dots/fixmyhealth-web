/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getReport = /* GraphQL */ `query GetReport($id: ID!) {
  getReport(id: $id) {
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
` as GeneratedQuery<APITypes.GetReportQueryVariables, APITypes.GetReportQuery>;
export const listReports = /* GraphQL */ `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportsQueryVariables,
  APITypes.ListReportsQuery
>;
export const reportsByUserIDAndCreatedAt = /* GraphQL */ `query ReportsByUserIDAndCreatedAt(
  $userID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  reportsByUserIDAndCreatedAt(
    userID: $userID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReportsByUserIDAndCreatedAtQueryVariables,
  APITypes.ReportsByUserIDAndCreatedAtQuery
>;
export const reportsByAppointmentID = /* GraphQL */ `query ReportsByAppointmentID(
  $appointmentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  reportsByAppointmentID(
    appointmentID: $appointmentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReportsByAppointmentIDQueryVariables,
  APITypes.ReportsByAppointmentIDQuery
>;
export const reportsByHealthConcernID = /* GraphQL */ `query ReportsByHealthConcernID(
  $healthConcernID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  reportsByHealthConcernID(
    healthConcernID: $healthConcernID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReportsByHealthConcernIDQueryVariables,
  APITypes.ReportsByHealthConcernIDQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const notificationsByUserID = /* GraphQL */ `query NotificationsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByUserIDQueryVariables,
  APITypes.NotificationsByUserIDQuery
>;
export const notificationsByExpertID = /* GraphQL */ `query NotificationsByExpertID(
  $expertID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByExpertID(
    expertID: $expertID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByExpertIDQueryVariables,
  APITypes.NotificationsByExpertIDQuery
>;
export const getAppointment = /* GraphQL */ `query GetAppointment($id: ID!) {
  getAppointment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAppointmentQueryVariables,
  APITypes.GetAppointmentQuery
>;
export const listAppointments = /* GraphQL */ `query ListAppointments(
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      userId      
      expert {
        firstName
        lastName
        profilePictureUrl    
      }     
      user {
        firstName
        lastName
        profilePictureUrl    
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAppointmentsQueryVariables,
  APITypes.ListAppointmentsQuery
>;
export const appointmentsByHealthConcernID = /* GraphQL */ `query AppointmentsByHealthConcernID(
  $healthConcernID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  appointmentsByHealthConcernID(
    healthConcernID: $healthConcernID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AppointmentsByHealthConcernIDQueryVariables,
  APITypes.AppointmentsByHealthConcernIDQuery
>;
export const appointmentsByExpertID = /* GraphQL */ `query AppointmentsByExpertID(
  $expertID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  appointmentsByExpertID(
    expertID: $expertID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AppointmentsByExpertIDQueryVariables,
  APITypes.AppointmentsByExpertIDQuery
>;
export const appointmentsByUserId = /* GraphQL */ `query AppointmentsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  appointmentsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AppointmentsByUserIdQueryVariables,
  APITypes.AppointmentsByUserIdQuery
>;
export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
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
      profileStatus
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
      expert {
        firstName
        lastName
        profilePictureUrl
      }
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
    Specialization
    ConsultationFee
    LanguageSpoken
    clinicLocation
    firebaseToken
    weeklySchedule {
      dayOfWeek
      isAvailable
      inClinicSlots {
        startTime
        endTime
        __typename
      }
      audioCallSlots {
        startTime
        endTime
        __typename
      }
      videoCallSlots {
        startTime
        endTime
        __typename
      }
      breakSlots {
        startTime
        endTime
        __typename
      }
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
      preferredDate
      preferredTimeSlot
      expertId
      concernType
      updatedAt          
      user {
        firstName
        lastName
        profilePictureUrl    
      }
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
      preferredDate
      preferredTimeSlot
      expertId
      concernType
      updatedAt
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
export const healthConcernsByExpertId = /* GraphQL */ `query HealthConcernsByExpertId(
  $expertId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelHealthConcernFilterInput
  $limit: Int
  $nextToken: String
) {
  healthConcernsByExpertId(
    expertId: $expertId
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
      preferredDate
      preferredTimeSlot
      expertId
      concernType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HealthConcernsByExpertIdQueryVariables,
  APITypes.HealthConcernsByExpertIdQuery
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
      firebaseToken
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

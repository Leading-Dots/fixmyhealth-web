/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReportInput = {
  id?: string | null,
  fileUrl?: string | null,
  fileName?: string | null,
  fileType?: string | null,
  createdAt?: string | null,
  userID: string,
  appointmentID?: string | null,
  healthConcernID?: string | null,
};

export type ModelReportConditionInput = {
  fileUrl?: ModelStringInput | null,
  fileName?: ModelStringInput | null,
  fileType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  appointmentID?: ModelIDInput | null,
  healthConcernID?: ModelIDInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Report = {
  __typename: "Report",
  id: string,
  fileUrl?: string | null,
  fileName?: string | null,
  fileType?: string | null,
  createdAt?: string | null,
  userID: string,
  appointmentID?: string | null,
  healthConcernID?: string | null,
  updatedAt: string,
};

export type UpdateReportInput = {
  id: string,
  fileUrl?: string | null,
  fileName?: string | null,
  fileType?: string | null,
  createdAt?: string | null,
  userID?: string | null,
  appointmentID?: string | null,
  healthConcernID?: string | null,
};

export type DeleteReportInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  userID?: string | null,
  expertID?: string | null,
  title?: string | null,
  body?: string | null,
  type?: string | null,
  fcmToken?: string | null,
  isSent?: boolean | null,
  isRead?: boolean | null,
};

export type ModelNotificationConditionInput = {
  userID?: ModelIDInput | null,
  expertID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  type?: ModelStringInput | null,
  fcmToken?: ModelStringInput | null,
  isSent?: ModelBooleanInput | null,
  isRead?: ModelBooleanInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  userID?: string | null,
  expertID?: string | null,
  title?: string | null,
  body?: string | null,
  type?: string | null,
  fcmToken?: string | null,
  isSent?: boolean | null,
  isRead?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNotificationInput = {
  id: string,
  userID?: string | null,
  expertID?: string | null,
  title?: string | null,
  body?: string | null,
  type?: string | null,
  fcmToken?: string | null,
  isSent?: boolean | null,
  isRead?: boolean | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateAppointmentInput = {
  id?: string | null,
  concernType?: ConcernType | null,
  concernStatus?: ConcernStatus | null,
  appointmentDateTime?: string | null,
  startTime: string,
  endTime: string,
  status?: string | null,
  location?: string | null,
  meetingLink?: string | null,
  phoneNumber?: string | null,
  title?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  healthConcernID?: string | null,
  expertID: string,
  userId: string,
};

export enum ConcernType {
  TEXT = "TEXT",
  IN_CLINIC = "IN_CLINIC",
  AUDIO_CALL = "AUDIO_CALL",
  VIDEO_CALL = "VIDEO_CALL",
}


export enum ConcernStatus {
  PENDING = "PENDING",
  ANSWERED = "ANSWERED",
  CLOSED = "CLOSED",
}


export type ModelAppointmentConditionInput = {
  concernType?: ModelConcernTypeInput | null,
  concernStatus?: ModelConcernStatusInput | null,
  appointmentDateTime?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  status?: ModelStringInput | null,
  location?: ModelStringInput | null,
  meetingLink?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  healthConcernID?: ModelIDInput | null,
  expertID?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
};

export type ModelConcernTypeInput = {
  eq?: ConcernType | null,
  ne?: ConcernType | null,
};

export type ModelConcernStatusInput = {
  eq?: ConcernStatus | null,
  ne?: ConcernStatus | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  concernType?: ConcernType | null,
  concernStatus?: ConcernStatus | null,
  appointmentDateTime?: string | null,
  startTime: string,
  endTime: string,
  status?: string | null,
  location?: string | null,
  meetingLink?: string | null,
  phoneNumber?: string | null,
  title?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  healthConcernID?: string | null,
  expertID: string,
  reports?: ModelReportConnection | null,
  expert?: Expert | null,
  userId: string,
  user?: User | null,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type Expert = {
  __typename: "Expert",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email: string,
  mobile?: string | null,
  education?: string | null,
  introduction?: string | null,
  profilePictureUrl?: string | null,
  experience?: string | null,
  averageRating?: number | null,
  totalReviews?: number | null,
  weeklySchedule?:  Array<DaySchedule | null > | null,
  Specialization?: Specialization | null,
  ConsultationFee?: number | null,
  LanguageSpoken?: string | null,
  clinicLocation?: string | null,
  firebaseToken?: string | null,
  appointments?: ModelAppointmentConnection | null,
  ExpertResponse?: ModelResponseConnection | null,
  ExpertReview?: ModelReviewConnection | null,
  profileStatus?: ProfileStatus | null,
  ExpertArticles?: ModelArticleConnection | null,
  HealthConcerns?: ModelHealthConcernConnection | null,
  Notifications?: ModelNotificationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type DaySchedule = {
  __typename: "DaySchedule",
  dayOfWeek: number,
  inClinicSlots?:  Array<TimeSlot | null > | null,
  audioCallSlots?:  Array<TimeSlot | null > | null,
  videoCallSlots?:  Array<TimeSlot | null > | null,
  breakSlots?:  Array<TimeSlot | null > | null,
  isAvailable?: boolean | null,
};

export type TimeSlot = {
  __typename: "TimeSlot",
  startTime: string,
  endTime: string,
};

export enum Specialization {
  CARDIOLOGIST = "CARDIOLOGIST",
  PEDIATRICIAN = "PEDIATRICIAN",
  GYNECOLOGIST = "GYNECOLOGIST",
  ORTHOPEDIC = "ORTHOPEDIC",
  DERMATOLOGIST = "DERMATOLOGIST",
  NEUROLOGIST = "NEUROLOGIST",
  GENERAL_PHYSICIAN = "GENERAL_PHYSICIAN",
  ENT_SPECIALIST = "ENT_SPECIALIST",
  PSYCHIATRIST = "PSYCHIATRIST",
  DIABETOLOGIST = "DIABETOLOGIST",
  DIETICIAN = "DIETICIAN",
}


export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items:  Array<Appointment | null >,
  nextToken?: string | null,
};

export type ModelResponseConnection = {
  __typename: "ModelResponseConnection",
  items:  Array<Response | null >,
  nextToken?: string | null,
};

export type Response = {
  __typename: "Response",
  id: string,
  responseText?: string | null,
  responseStatus?: ResponseStatus | null,
  createdAt?: string | null,
  healthconcernID: string,
  expertID: string,
  ResponseReview?: Review | null,
  updatedAt: string,
  responseResponseReviewId?: string | null,
};

export enum ResponseStatus {
  DRAFT = "DRAFT",
  SUBMITTED = "SUBMITTED",
  REVIEWED = "REVIEWED",
}


export type Review = {
  __typename: "Review",
  id: string,
  responseId: string,
  rating: number,
  feedback?: string | null,
  createdAt?: string | null,
  userID: string,
  expertID: string,
  updatedAt: string,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export enum ProfileStatus {
  PENDING = "PENDING",
  PUBLISHED = "PUBLISHED",
  REJECTED = "REJECTED",
}


export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  title?: string | null,
  content?: string | null,
  imageUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  expertID?: string | null,
  expert?: Expert | null,
};

export type ModelHealthConcernConnection = {
  __typename: "ModelHealthConcernConnection",
  items:  Array<HealthConcern | null >,
  nextToken?: string | null,
};

export type HealthConcern = {
  __typename: "HealthConcern",
  id: string,
  title: string,
  description: string,
  concernStatus?: ConcernStatus | null,
  attachments?: string | null,
  createdAt?: string | null,
  userID: string,
  preferredDate?: string | null,
  preferredTimeSlot?: string | null,
  user?: User | null,
  HealthConcernResponses?: ModelResponseConnection | null,
  expertId?: string | null,
  Expert?: Expert | null,
  concernType?: ConcernType | null,
  reports?: ModelReportConnection | null,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  dob?: string | null,
  mobile?: string | null,
  address?: string | null,
  height?: number | null,
  weight?: number | null,
  firebaseToken?: string | null,
  subscriptionStatus?: SubscriptionStatus | null,
  UserFamilyMembers?: ModelFamilyMemberConnection | null,
  UserHealthConcerns?: ModelHealthConcernConnection | null,
  UserReviews?: ModelReviewConnection | null,
  profilePictureUrl?: string | null,
  profileStatus?: ProfileStatus | null,
  UserReports?: ModelReportConnection | null,
  appointments?: ModelAppointmentConnection | null,
  Notifications?: ModelNotificationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  EXPIRED = "EXPIRED",
}


export type ModelFamilyMemberConnection = {
  __typename: "ModelFamilyMemberConnection",
  items:  Array<FamilyMember | null >,
  nextToken?: string | null,
};

export type FamilyMember = {
  __typename: "FamilyMember",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  weight?: number | null,
  height?: number | null,
  dob?: string | null,
  relation?: string | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type UpdateAppointmentInput = {
  id: string,
  concernType?: ConcernType | null,
  concernStatus?: ConcernStatus | null,
  appointmentDateTime?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  status?: string | null,
  location?: string | null,
  meetingLink?: string | null,
  phoneNumber?: string | null,
  title?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  healthConcernID?: string | null,
  expertID?: string | null,
  userId?: string | null,
};

export type DeleteAppointmentInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  imageUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  expertID?: string | null,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  expertID?: ModelIDInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  imageUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  expertID?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  responseId: string,
  rating: number,
  feedback?: string | null,
  createdAt?: string | null,
  userID: string,
  expertID: string,
};

export type ModelReviewConditionInput = {
  responseId?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  feedback?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  expertID?: ModelIDInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateReviewInput = {
  id: string,
  responseId?: string | null,
  rating?: number | null,
  feedback?: string | null,
  createdAt?: string | null,
  userID?: string | null,
  expertID?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreateResponseInput = {
  id?: string | null,
  responseText?: string | null,
  responseStatus?: ResponseStatus | null,
  createdAt?: string | null,
  healthconcernID: string,
  expertID: string,
  responseResponseReviewId?: string | null,
};

export type ModelResponseConditionInput = {
  responseText?: ModelStringInput | null,
  responseStatus?: ModelResponseStatusInput | null,
  createdAt?: ModelStringInput | null,
  healthconcernID?: ModelIDInput | null,
  expertID?: ModelIDInput | null,
  and?: Array< ModelResponseConditionInput | null > | null,
  or?: Array< ModelResponseConditionInput | null > | null,
  not?: ModelResponseConditionInput | null,
  updatedAt?: ModelStringInput | null,
  responseResponseReviewId?: ModelIDInput | null,
};

export type ModelResponseStatusInput = {
  eq?: ResponseStatus | null,
  ne?: ResponseStatus | null,
};

export type UpdateResponseInput = {
  id: string,
  responseText?: string | null,
  responseStatus?: ResponseStatus | null,
  createdAt?: string | null,
  healthconcernID?: string | null,
  expertID?: string | null,
  responseResponseReviewId?: string | null,
};

export type DeleteResponseInput = {
  id: string,
};

export type CreateExpertInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email: string,
  mobile?: string | null,
  education?: string | null,
  introduction?: string | null,
  profilePictureUrl?: string | null,
  experience?: string | null,
  averageRating?: number | null,
  totalReviews?: number | null,
  weeklySchedule?: Array< DayScheduleInput | null > | null,
  Specialization?: Specialization | null,
  ConsultationFee?: number | null,
  LanguageSpoken?: string | null,
  clinicLocation?: string | null,
  firebaseToken?: string | null,
  profileStatus?: ProfileStatus | null,
};

export type DayScheduleInput = {
  dayOfWeek: number,
  inClinicSlots?: Array< TimeSlotInput | null > | null,
  audioCallSlots?: Array< TimeSlotInput | null > | null,
  videoCallSlots?: Array< TimeSlotInput | null > | null,
  breakSlots?: Array< TimeSlotInput | null > | null,
  isAvailable?: boolean | null,
};

export type TimeSlotInput = {
  startTime: string,
  endTime: string,
};

export type ModelExpertConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  education?: ModelStringInput | null,
  introduction?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  experience?: ModelStringInput | null,
  averageRating?: ModelFloatInput | null,
  totalReviews?: ModelIntInput | null,
  Specialization?: ModelSpecializationInput | null,
  ConsultationFee?: ModelIntInput | null,
  LanguageSpoken?: ModelStringInput | null,
  clinicLocation?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  and?: Array< ModelExpertConditionInput | null > | null,
  or?: Array< ModelExpertConditionInput | null > | null,
  not?: ModelExpertConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelSpecializationInput = {
  eq?: Specialization | null,
  ne?: Specialization | null,
};

export type ModelProfileStatusInput = {
  eq?: ProfileStatus | null,
  ne?: ProfileStatus | null,
};

export type UpdateExpertInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  mobile?: string | null,
  education?: string | null,
  introduction?: string | null,
  profilePictureUrl?: string | null,
  experience?: string | null,
  averageRating?: number | null,
  totalReviews?: number | null,
  weeklySchedule?: Array< DayScheduleInput | null > | null,
  Specialization?: Specialization | null,
  ConsultationFee?: number | null,
  LanguageSpoken?: string | null,
  clinicLocation?: string | null,
  firebaseToken?: string | null,
  profileStatus?: ProfileStatus | null,
};

export type DeleteExpertInput = {
  id: string,
};

export type CreateHealthConcernInput = {
  id?: string | null,
  title: string,
  description: string,
  concernStatus?: ConcernStatus | null,
  attachments?: string | null,
  createdAt?: string | null,
  userID: string,
  preferredDate?: string | null,
  preferredTimeSlot?: string | null,
  expertId?: string | null,
  concernType?: ConcernType | null,
};

export type ModelHealthConcernConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  concernStatus?: ModelConcernStatusInput | null,
  attachments?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  preferredDate?: ModelStringInput | null,
  preferredTimeSlot?: ModelStringInput | null,
  expertId?: ModelIDInput | null,
  concernType?: ModelConcernTypeInput | null,
  and?: Array< ModelHealthConcernConditionInput | null > | null,
  or?: Array< ModelHealthConcernConditionInput | null > | null,
  not?: ModelHealthConcernConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateHealthConcernInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  concernStatus?: ConcernStatus | null,
  attachments?: string | null,
  createdAt?: string | null,
  userID?: string | null,
  preferredDate?: string | null,
  preferredTimeSlot?: string | null,
  expertId?: string | null,
  concernType?: ConcernType | null,
};

export type DeleteHealthConcernInput = {
  id: string,
};

export type CreateFamilyMemberInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  weight?: number | null,
  height?: number | null,
  dob?: string | null,
  relation?: string | null,
  userID: string,
};

export type ModelFamilyMemberConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  dob?: ModelStringInput | null,
  relation?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFamilyMemberConditionInput | null > | null,
  or?: Array< ModelFamilyMemberConditionInput | null > | null,
  not?: ModelFamilyMemberConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFamilyMemberInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  weight?: number | null,
  height?: number | null,
  dob?: string | null,
  relation?: string | null,
  userID?: string | null,
};

export type DeleteFamilyMemberInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  dob?: string | null,
  mobile?: string | null,
  address?: string | null,
  height?: number | null,
  weight?: number | null,
  firebaseToken?: string | null,
  subscriptionStatus?: SubscriptionStatus | null,
  profilePictureUrl?: string | null,
  profileStatus?: ProfileStatus | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  address?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  firebaseToken?: ModelStringInput | null,
  subscriptionStatus?: ModelSubscriptionStatusInput | null,
  profilePictureUrl?: ModelStringInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSubscriptionStatusInput = {
  eq?: SubscriptionStatus | null,
  ne?: SubscriptionStatus | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  dob?: string | null,
  mobile?: string | null,
  address?: string | null,
  height?: number | null,
  weight?: number | null,
  firebaseToken?: string | null,
  subscriptionStatus?: SubscriptionStatus | null,
  profilePictureUrl?: string | null,
  profileStatus?: ProfileStatus | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null,
  fileUrl?: ModelStringInput | null,
  fileName?: ModelStringInput | null,
  fileType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  appointmentID?: ModelIDInput | null,
  healthConcernID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  expertID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  type?: ModelStringInput | null,
  fcmToken?: ModelStringInput | null,
  isSent?: ModelBooleanInput | null,
  isRead?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  concernType?: ModelConcernTypeInput | null,
  concernStatus?: ModelConcernStatusInput | null,
  appointmentDateTime?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  status?: ModelStringInput | null,
  location?: ModelStringInput | null,
  meetingLink?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  healthConcernID?: ModelIDInput | null,
  expertID?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  expertID?: ModelIDInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  responseId?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  feedback?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  expertID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelResponseFilterInput = {
  id?: ModelIDInput | null,
  responseText?: ModelStringInput | null,
  responseStatus?: ModelResponseStatusInput | null,
  createdAt?: ModelStringInput | null,
  healthconcernID?: ModelIDInput | null,
  expertID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelResponseFilterInput | null > | null,
  or?: Array< ModelResponseFilterInput | null > | null,
  not?: ModelResponseFilterInput | null,
  responseResponseReviewId?: ModelIDInput | null,
};

export type ModelExpertFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  education?: ModelStringInput | null,
  introduction?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  experience?: ModelStringInput | null,
  averageRating?: ModelFloatInput | null,
  totalReviews?: ModelIntInput | null,
  Specialization?: ModelSpecializationInput | null,
  ConsultationFee?: ModelIntInput | null,
  LanguageSpoken?: ModelStringInput | null,
  clinicLocation?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExpertFilterInput | null > | null,
  or?: Array< ModelExpertFilterInput | null > | null,
  not?: ModelExpertFilterInput | null,
};

export type ModelExpertConnection = {
  __typename: "ModelExpertConnection",
  items:  Array<Expert | null >,
  nextToken?: string | null,
};

export type ModelHealthConcernFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  concernStatus?: ModelConcernStatusInput | null,
  attachments?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  preferredDate?: ModelStringInput | null,
  preferredTimeSlot?: ModelStringInput | null,
  expertId?: ModelIDInput | null,
  concernType?: ModelConcernTypeInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelHealthConcernFilterInput | null > | null,
  or?: Array< ModelHealthConcernFilterInput | null > | null,
  not?: ModelHealthConcernFilterInput | null,
};

export type ModelFamilyMemberFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  dob?: ModelStringInput | null,
  relation?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFamilyMemberFilterInput | null > | null,
  or?: Array< ModelFamilyMemberFilterInput | null > | null,
  not?: ModelFamilyMemberFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  address?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  firebaseToken?: ModelStringInput | null,
  subscriptionStatus?: ModelSubscriptionStatusInput | null,
  profilePictureUrl?: ModelStringInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fileUrl?: ModelSubscriptionStringInput | null,
  fileName?: ModelSubscriptionStringInput | null,
  fileType?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  appointmentID?: ModelSubscriptionIDInput | null,
  healthConcernID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  expertID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  fcmToken?: ModelSubscriptionStringInput | null,
  isSent?: ModelSubscriptionBooleanInput | null,
  isRead?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAppointmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  concernType?: ModelSubscriptionStringInput | null,
  concernStatus?: ModelSubscriptionStringInput | null,
  appointmentDateTime?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  meetingLink?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  healthConcernID?: ModelSubscriptionIDInput | null,
  expertID?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppointmentFilterInput | null > | null,
};

export type ModelSubscriptionArticleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  expertID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  responseId?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  feedback?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  expertID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionResponseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  responseText?: ModelSubscriptionStringInput | null,
  responseStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  healthconcernID?: ModelSubscriptionIDInput | null,
  expertID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResponseFilterInput | null > | null,
  or?: Array< ModelSubscriptionResponseFilterInput | null > | null,
  responseResponseReviewId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionExpertFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  mobile?: ModelSubscriptionStringInput | null,
  education?: ModelSubscriptionStringInput | null,
  introduction?: ModelSubscriptionStringInput | null,
  profilePictureUrl?: ModelSubscriptionStringInput | null,
  experience?: ModelSubscriptionStringInput | null,
  averageRating?: ModelSubscriptionFloatInput | null,
  totalReviews?: ModelSubscriptionIntInput | null,
  Specialization?: ModelSubscriptionStringInput | null,
  ConsultationFee?: ModelSubscriptionIntInput | null,
  LanguageSpoken?: ModelSubscriptionStringInput | null,
  clinicLocation?: ModelSubscriptionStringInput | null,
  firebaseToken?: ModelSubscriptionStringInput | null,
  profileStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExpertFilterInput | null > | null,
  or?: Array< ModelSubscriptionExpertFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionHealthConcernFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  concernStatus?: ModelSubscriptionStringInput | null,
  attachments?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  preferredDate?: ModelSubscriptionStringInput | null,
  preferredTimeSlot?: ModelSubscriptionStringInput | null,
  expertId?: ModelSubscriptionIDInput | null,
  concernType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHealthConcernFilterInput | null > | null,
  or?: Array< ModelSubscriptionHealthConcernFilterInput | null > | null,
};

export type ModelSubscriptionFamilyMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  height?: ModelSubscriptionFloatInput | null,
  dob?: ModelSubscriptionStringInput | null,
  relation?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFamilyMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionFamilyMemberFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  mobile?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  height?: ModelSubscriptionFloatInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  firebaseToken?: ModelSubscriptionStringInput | null,
  subscriptionStatus?: ModelSubscriptionStringInput | null,
  profilePictureUrl?: ModelSubscriptionStringInput | null,
  profileStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    id: string,
    fileUrl?: string | null,
    fileName?: string | null,
    fileType?: string | null,
    createdAt?: string | null,
    userID: string,
    appointmentID?: string | null,
    healthConcernID?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type UpdateReportMutation = {
  updateReport?:  {
    __typename: "Report",
    id: string,
    fileUrl?: string | null,
    fileName?: string | null,
    fileType?: string | null,
    createdAt?: string | null,
    userID: string,
    appointmentID?: string | null,
    healthConcernID?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
  condition?: ModelReportConditionInput | null,
};

export type DeleteReportMutation = {
  deleteReport?:  {
    __typename: "Report",
    id: string,
    fileUrl?: string | null,
    fileName?: string | null,
    fileType?: string | null,
    createdAt?: string | null,
    userID: string,
    appointmentID?: string | null,
    healthConcernID?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    userID?: string | null,
    expertID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    userID?: string | null,
    expertID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    userID?: string | null,
    expertID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    concernType?: ConcernType | null,
    concernStatus?: ConcernStatus | null,
    appointmentDateTime?: string | null,
    startTime: string,
    endTime: string,
    status?: string | null,
    location?: string | null,
    meetingLink?: string | null,
    phoneNumber?: string | null,
    title?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    healthConcernID?: string | null,
    expertID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    concernType?: ConcernType | null,
    concernStatus?: ConcernStatus | null,
    appointmentDateTime?: string | null,
    startTime: string,
    endTime: string,
    status?: string | null,
    location?: string | null,
    meetingLink?: string | null,
    phoneNumber?: string | null,
    title?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    healthConcernID?: string | null,
    expertID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    concernType?: ConcernType | null,
    concernStatus?: ConcernStatus | null,
    appointmentDateTime?: string | null,
    startTime: string,
    endTime: string,
    status?: string | null,
    location?: string | null,
    meetingLink?: string | null,
    phoneNumber?: string | null,
    title?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    healthConcernID?: string | null,
    expertID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    expertID?: string | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    expertID?: string | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    expertID?: string | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    responseId: string,
    rating: number,
    feedback?: string | null,
    createdAt?: string | null,
    userID: string,
    expertID: string,
    updatedAt: string,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    responseId: string,
    rating: number,
    feedback?: string | null,
    createdAt?: string | null,
    userID: string,
    expertID: string,
    updatedAt: string,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    responseId: string,
    rating: number,
    feedback?: string | null,
    createdAt?: string | null,
    userID: string,
    expertID: string,
    updatedAt: string,
  } | null,
};

export type CreateResponseMutationVariables = {
  input: CreateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type CreateResponseMutation = {
  createResponse?:  {
    __typename: "Response",
    id: string,
    responseText?: string | null,
    responseStatus?: ResponseStatus | null,
    createdAt?: string | null,
    healthconcernID: string,
    expertID: string,
    ResponseReview?:  {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    responseResponseReviewId?: string | null,
  } | null,
};

export type UpdateResponseMutationVariables = {
  input: UpdateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type UpdateResponseMutation = {
  updateResponse?:  {
    __typename: "Response",
    id: string,
    responseText?: string | null,
    responseStatus?: ResponseStatus | null,
    createdAt?: string | null,
    healthconcernID: string,
    expertID: string,
    ResponseReview?:  {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    responseResponseReviewId?: string | null,
  } | null,
};

export type DeleteResponseMutationVariables = {
  input: DeleteResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type DeleteResponseMutation = {
  deleteResponse?:  {
    __typename: "Response",
    id: string,
    responseText?: string | null,
    responseStatus?: ResponseStatus | null,
    createdAt?: string | null,
    healthconcernID: string,
    expertID: string,
    ResponseReview?:  {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    responseResponseReviewId?: string | null,
  } | null,
};

export type CreateExpertMutationVariables = {
  input: CreateExpertInput,
  condition?: ModelExpertConditionInput | null,
};

export type CreateExpertMutation = {
  createExpert?:  {
    __typename: "Expert",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    mobile?: string | null,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    weeklySchedule?:  Array< {
      __typename: "DaySchedule",
      dayOfWeek: number,
      isAvailable?: boolean | null,
    } | null > | null,
    Specialization?: Specialization | null,
    ConsultationFee?: number | null,
    LanguageSpoken?: string | null,
    clinicLocation?: string | null,
    firebaseToken?: string | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    ExpertArticles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    HealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExpertMutationVariables = {
  input: UpdateExpertInput,
  condition?: ModelExpertConditionInput | null,
};

export type UpdateExpertMutation = {
  updateExpert?:  {
    __typename: "Expert",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    mobile?: string | null,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    weeklySchedule?:  Array< {
      __typename: "DaySchedule",
      dayOfWeek: number,
      isAvailable?: boolean | null,
    } | null > | null,
    Specialization?: Specialization | null,
    ConsultationFee?: number | null,
    LanguageSpoken?: string | null,
    clinicLocation?: string | null,
    firebaseToken?: string | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    ExpertArticles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    HealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExpertMutationVariables = {
  input: DeleteExpertInput,
  condition?: ModelExpertConditionInput | null,
};

export type DeleteExpertMutation = {
  deleteExpert?:  {
    __typename: "Expert",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    mobile?: string | null,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    weeklySchedule?:  Array< {
      __typename: "DaySchedule",
      dayOfWeek: number,
      isAvailable?: boolean | null,
    } | null > | null,
    Specialization?: Specialization | null,
    ConsultationFee?: number | null,
    LanguageSpoken?: string | null,
    clinicLocation?: string | null,
    firebaseToken?: string | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    ExpertArticles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    HealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHealthConcernMutationVariables = {
  input: CreateHealthConcernInput,
  condition?: ModelHealthConcernConditionInput | null,
};

export type CreateHealthConcernMutation = {
  createHealthConcern?:  {
    __typename: "HealthConcern",
    id: string,
    title: string,
    description: string,
    concernStatus?: ConcernStatus | null,
    attachments?: string | null,
    createdAt?: string | null,
    userID: string,
    preferredDate?: string | null,
    preferredTimeSlot?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    expertId?: string | null,
    Expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    concernType?: ConcernType | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateHealthConcernMutationVariables = {
  input: UpdateHealthConcernInput,
  condition?: ModelHealthConcernConditionInput | null,
};

export type UpdateHealthConcernMutation = {
  updateHealthConcern?:  {
    __typename: "HealthConcern",
    id: string,
    title: string,
    description: string,
    concernStatus?: ConcernStatus | null,
    attachments?: string | null,
    createdAt?: string | null,
    userID: string,
    preferredDate?: string | null,
    preferredTimeSlot?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    expertId?: string | null,
    Expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    concernType?: ConcernType | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteHealthConcernMutationVariables = {
  input: DeleteHealthConcernInput,
  condition?: ModelHealthConcernConditionInput | null,
};

export type DeleteHealthConcernMutation = {
  deleteHealthConcern?:  {
    __typename: "HealthConcern",
    id: string,
    title: string,
    description: string,
    concernStatus?: ConcernStatus | null,
    attachments?: string | null,
    createdAt?: string | null,
    userID: string,
    preferredDate?: string | null,
    preferredTimeSlot?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    expertId?: string | null,
    Expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    concernType?: ConcernType | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateFamilyMemberMutationVariables = {
  input: CreateFamilyMemberInput,
  condition?: ModelFamilyMemberConditionInput | null,
};

export type CreateFamilyMemberMutation = {
  createFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    weight?: number | null,
    height?: number | null,
    dob?: string | null,
    relation?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFamilyMemberMutationVariables = {
  input: UpdateFamilyMemberInput,
  condition?: ModelFamilyMemberConditionInput | null,
};

export type UpdateFamilyMemberMutation = {
  updateFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    weight?: number | null,
    height?: number | null,
    dob?: string | null,
    relation?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFamilyMemberMutationVariables = {
  input: DeleteFamilyMemberInput,
  condition?: ModelFamilyMemberConditionInput | null,
};

export type DeleteFamilyMemberMutation = {
  deleteFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    weight?: number | null,
    height?: number | null,
    dob?: string | null,
    relation?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
    firebaseToken?: string | null,
    subscriptionStatus?: SubscriptionStatus | null,
    UserFamilyMembers?:  {
      __typename: "ModelFamilyMemberConnection",
      nextToken?: string | null,
    } | null,
    UserHealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    UserReviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profilePictureUrl?: string | null,
    profileStatus?: ProfileStatus | null,
    UserReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
    firebaseToken?: string | null,
    subscriptionStatus?: SubscriptionStatus | null,
    UserFamilyMembers?:  {
      __typename: "ModelFamilyMemberConnection",
      nextToken?: string | null,
    } | null,
    UserHealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    UserReviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profilePictureUrl?: string | null,
    profileStatus?: ProfileStatus | null,
    UserReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
    firebaseToken?: string | null,
    subscriptionStatus?: SubscriptionStatus | null,
    UserFamilyMembers?:  {
      __typename: "ModelFamilyMemberConnection",
      nextToken?: string | null,
    } | null,
    UserHealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    UserReviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profilePictureUrl?: string | null,
    profileStatus?: ProfileStatus | null,
    UserReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    id: string,
    fileUrl?: string | null,
    fileName?: string | null,
    fileType?: string | null,
    createdAt?: string | null,
    userID: string,
    appointmentID?: string | null,
    healthConcernID?: string | null,
    updatedAt: string,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      fileUrl?: string | null,
      fileName?: string | null,
      fileType?: string | null,
      createdAt?: string | null,
      userID: string,
      appointmentID?: string | null,
      healthConcernID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReportsByUserIDAndCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReportsByUserIDAndCreatedAtQuery = {
  reportsByUserIDAndCreatedAt?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      fileUrl?: string | null,
      fileName?: string | null,
      fileType?: string | null,
      createdAt?: string | null,
      userID: string,
      appointmentID?: string | null,
      healthConcernID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReportsByAppointmentIDQueryVariables = {
  appointmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReportsByAppointmentIDQuery = {
  reportsByAppointmentID?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      fileUrl?: string | null,
      fileName?: string | null,
      fileType?: string | null,
      createdAt?: string | null,
      userID: string,
      appointmentID?: string | null,
      healthConcernID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReportsByHealthConcernIDQueryVariables = {
  healthConcernID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReportsByHealthConcernIDQuery = {
  reportsByHealthConcernID?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      fileUrl?: string | null,
      fileName?: string | null,
      fileType?: string | null,
      createdAt?: string | null,
      userID: string,
      appointmentID?: string | null,
      healthConcernID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    userID?: string | null,
    expertID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      userID?: string | null,
      expertID?: string | null,
      title?: string | null,
      body?: string | null,
      type?: string | null,
      fcmToken?: string | null,
      isSent?: boolean | null,
      isRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByUserIDQuery = {
  notificationsByUserID?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      userID?: string | null,
      expertID?: string | null,
      title?: string | null,
      body?: string | null,
      type?: string | null,
      fcmToken?: string | null,
      isSent?: boolean | null,
      isRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByExpertIDQueryVariables = {
  expertID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByExpertIDQuery = {
  notificationsByExpertID?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      userID?: string | null,
      expertID?: string | null,
      title?: string | null,
      body?: string | null,
      type?: string | null,
      fcmToken?: string | null,
      isSent?: boolean | null,
      isRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    concernType?: ConcernType | null,
    concernStatus?: ConcernStatus | null,
    appointmentDateTime?: string | null,
    startTime: string,
    endTime: string,
    status?: string | null,
    location?: string | null,
    meetingLink?: string | null,
    phoneNumber?: string | null,
    title?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    healthConcernID?: string | null,
    expertID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      concernType?: ConcernType | null,
      concernStatus?: ConcernStatus | null,
      appointmentDateTime?: string | null,
      startTime: string,
      endTime: string,
      status?: string | null,
      location?: string | null,
      meetingLink?: string | null,
      phoneNumber?: string | null,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      healthConcernID?: string | null,
      expertID: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AppointmentsByHealthConcernIDQueryVariables = {
  healthConcernID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByHealthConcernIDQuery = {
  appointmentsByHealthConcernID?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      concernType?: ConcernType | null,
      concernStatus?: ConcernStatus | null,
      appointmentDateTime?: string | null,
      startTime: string,
      endTime: string,
      status?: string | null,
      location?: string | null,
      meetingLink?: string | null,
      phoneNumber?: string | null,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      healthConcernID?: string | null,
      expertID: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AppointmentsByExpertIDQueryVariables = {
  expertID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByExpertIDQuery = {
  appointmentsByExpertID?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      concernType?: ConcernType | null,
      concernStatus?: ConcernStatus | null,
      appointmentDateTime?: string | null,
      startTime: string,
      endTime: string,
      status?: string | null,
      location?: string | null,
      meetingLink?: string | null,
      phoneNumber?: string | null,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      healthConcernID?: string | null,
      expertID: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AppointmentsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppointmentsByUserIdQuery = {
  appointmentsByUserId?:  {
    __typename: "ModelAppointmentConnection",
    items:  Array< {
      __typename: "Appointment",
      id: string,
      concernType?: ConcernType | null,
      concernStatus?: ConcernStatus | null,
      appointmentDateTime?: string | null,
      startTime: string,
      endTime: string,
      status?: string | null,
      location?: string | null,
      meetingLink?: string | null,
      phoneNumber?: string | null,
      title?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      healthConcernID?: string | null,
      expertID: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    expertID?: string | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title?: string | null,
      content?: string | null,
      imageUrl?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      expertID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ArticlesByExpertIDQueryVariables = {
  expertID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ArticlesByExpertIDQuery = {
  articlesByExpertID?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title?: string | null,
      content?: string | null,
      imageUrl?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      expertID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    responseId: string,
    rating: number,
    feedback?: string | null,
    createdAt?: string | null,
    userID: string,
    expertID: string,
    updatedAt: string,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReviewsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReviewsByUserIDQuery = {
  reviewsByUserID?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReviewsByExpertIDQueryVariables = {
  expertID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReviewsByExpertIDQuery = {
  reviewsByExpertID?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResponseQueryVariables = {
  id: string,
};

export type GetResponseQuery = {
  getResponse?:  {
    __typename: "Response",
    id: string,
    responseText?: string | null,
    responseStatus?: ResponseStatus | null,
    createdAt?: string | null,
    healthconcernID: string,
    expertID: string,
    ResponseReview?:  {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    responseResponseReviewId?: string | null,
  } | null,
};

export type ListResponsesQueryVariables = {
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResponsesQuery = {
  listResponses?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      responseText?: string | null,
      responseStatus?: ResponseStatus | null,
      createdAt?: string | null,
      healthconcernID: string,
      expertID: string,
      updatedAt: string,
      responseResponseReviewId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ResponsesByHealthconcernIDQueryVariables = {
  healthconcernID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ResponsesByHealthconcernIDQuery = {
  responsesByHealthconcernID?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      responseText?: string | null,
      responseStatus?: ResponseStatus | null,
      createdAt?: string | null,
      healthconcernID: string,
      expertID: string,
      updatedAt: string,
      responseResponseReviewId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ResponsesByExpertIDQueryVariables = {
  expertID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ResponsesByExpertIDQuery = {
  responsesByExpertID?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      responseText?: string | null,
      responseStatus?: ResponseStatus | null,
      createdAt?: string | null,
      healthconcernID: string,
      expertID: string,
      updatedAt: string,
      responseResponseReviewId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExpertQueryVariables = {
  id: string,
};

export type GetExpertQuery = {
  getExpert?:  {
    __typename: "Expert",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    mobile?: string | null,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    weeklySchedule?:  Array< {
      __typename: "DaySchedule",
      dayOfWeek: number,
      isAvailable?: boolean | null,
    } | null > | null,
    Specialization?: Specialization | null,
    ConsultationFee?: number | null,
    LanguageSpoken?: string | null,
    clinicLocation?: string | null,
    firebaseToken?: string | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    ExpertArticles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    HealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExpertsQueryVariables = {
  filter?: ModelExpertFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExpertsQuery = {
  listExperts?:  {
    __typename: "ModelExpertConnection",
    items:  Array< {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHealthConcernQueryVariables = {
  id: string,
};

export type GetHealthConcernQuery = {
  getHealthConcern?:  {
    __typename: "HealthConcern",
    id: string,
    title: string,
    description: string,
    concernStatus?: ConcernStatus | null,
    attachments?: string | null,
    createdAt?: string | null,
    userID: string,
    preferredDate?: string | null,
    preferredTimeSlot?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    expertId?: string | null,
    Expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    concernType?: ConcernType | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListHealthConcernsQueryVariables = {
  filter?: ModelHealthConcernFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHealthConcernsQuery = {
  listHealthConcerns?:  {
    __typename: "ModelHealthConcernConnection",
    items:  Array< {
      __typename: "HealthConcern",
      id: string,
      title: string,
      description: string,
      concernStatus?: ConcernStatus | null,
      attachments?: string | null,
      createdAt?: string | null,
      userID: string,
      preferredDate?: string | null,
      preferredTimeSlot?: string | null,
      expertId?: string | null,
      concernType?: ConcernType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HealthConcernsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHealthConcernFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HealthConcernsByUserIDQuery = {
  healthConcernsByUserID?:  {
    __typename: "ModelHealthConcernConnection",
    items:  Array< {
      __typename: "HealthConcern",
      id: string,
      title: string,
      description: string,
      concernStatus?: ConcernStatus | null,
      attachments?: string | null,
      createdAt?: string | null,
      userID: string,
      preferredDate?: string | null,
      preferredTimeSlot?: string | null,
      expertId?: string | null,
      concernType?: ConcernType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HealthConcernsByExpertIdQueryVariables = {
  expertId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHealthConcernFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HealthConcernsByExpertIdQuery = {
  healthConcernsByExpertId?:  {
    __typename: "ModelHealthConcernConnection",
    items:  Array< {
      __typename: "HealthConcern",
      id: string,
      title: string,
      description: string,
      concernStatus?: ConcernStatus | null,
      attachments?: string | null,
      createdAt?: string | null,
      userID: string,
      preferredDate?: string | null,
      preferredTimeSlot?: string | null,
      expertId?: string | null,
      concernType?: ConcernType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFamilyMemberQueryVariables = {
  id: string,
};

export type GetFamilyMemberQuery = {
  getFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    weight?: number | null,
    height?: number | null,
    dob?: string | null,
    relation?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFamilyMembersQueryVariables = {
  filter?: ModelFamilyMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFamilyMembersQuery = {
  listFamilyMembers?:  {
    __typename: "ModelFamilyMemberConnection",
    items:  Array< {
      __typename: "FamilyMember",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      weight?: number | null,
      height?: number | null,
      dob?: string | null,
      relation?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FamilyMembersByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFamilyMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FamilyMembersByUserIDQuery = {
  familyMembersByUserID?:  {
    __typename: "ModelFamilyMemberConnection",
    items:  Array< {
      __typename: "FamilyMember",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      weight?: number | null,
      height?: number | null,
      dob?: string | null,
      relation?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
    firebaseToken?: string | null,
    subscriptionStatus?: SubscriptionStatus | null,
    UserFamilyMembers?:  {
      __typename: "ModelFamilyMemberConnection",
      nextToken?: string | null,
    } | null,
    UserHealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    UserReviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profilePictureUrl?: string | null,
    profileStatus?: ProfileStatus | null,
    UserReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    id: string,
    fileUrl?: string | null,
    fileName?: string | null,
    fileType?: string | null,
    createdAt?: string | null,
    userID: string,
    appointmentID?: string | null,
    healthConcernID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport?:  {
    __typename: "Report",
    id: string,
    fileUrl?: string | null,
    fileName?: string | null,
    fileType?: string | null,
    createdAt?: string | null,
    userID: string,
    appointmentID?: string | null,
    healthConcernID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport?:  {
    __typename: "Report",
    id: string,
    fileUrl?: string | null,
    fileName?: string | null,
    fileType?: string | null,
    createdAt?: string | null,
    userID: string,
    appointmentID?: string | null,
    healthConcernID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    userID?: string | null,
    expertID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    userID?: string | null,
    expertID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    userID?: string | null,
    expertID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    concernType?: ConcernType | null,
    concernStatus?: ConcernStatus | null,
    appointmentDateTime?: string | null,
    startTime: string,
    endTime: string,
    status?: string | null,
    location?: string | null,
    meetingLink?: string | null,
    phoneNumber?: string | null,
    title?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    healthConcernID?: string | null,
    expertID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    concernType?: ConcernType | null,
    concernStatus?: ConcernStatus | null,
    appointmentDateTime?: string | null,
    startTime: string,
    endTime: string,
    status?: string | null,
    location?: string | null,
    meetingLink?: string | null,
    phoneNumber?: string | null,
    title?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    healthConcernID?: string | null,
    expertID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteAppointmentSubscriptionVariables = {
  filter?: ModelSubscriptionAppointmentFilterInput | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    concernType?: ConcernType | null,
    concernStatus?: ConcernStatus | null,
    appointmentDateTime?: string | null,
    startTime: string,
    endTime: string,
    status?: string | null,
    location?: string | null,
    meetingLink?: string | null,
    phoneNumber?: string | null,
    title?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    healthConcernID?: string | null,
    expertID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    expertID?: string | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    expertID?: string | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    content?: string | null,
    imageUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    expertID?: string | null,
    expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    responseId: string,
    rating: number,
    feedback?: string | null,
    createdAt?: string | null,
    userID: string,
    expertID: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    responseId: string,
    rating: number,
    feedback?: string | null,
    createdAt?: string | null,
    userID: string,
    expertID: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    responseId: string,
    rating: number,
    feedback?: string | null,
    createdAt?: string | null,
    userID: string,
    expertID: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
};

export type OnCreateResponseSubscription = {
  onCreateResponse?:  {
    __typename: "Response",
    id: string,
    responseText?: string | null,
    responseStatus?: ResponseStatus | null,
    createdAt?: string | null,
    healthconcernID: string,
    expertID: string,
    ResponseReview?:  {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    responseResponseReviewId?: string | null,
  } | null,
};

export type OnUpdateResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
};

export type OnUpdateResponseSubscription = {
  onUpdateResponse?:  {
    __typename: "Response",
    id: string,
    responseText?: string | null,
    responseStatus?: ResponseStatus | null,
    createdAt?: string | null,
    healthconcernID: string,
    expertID: string,
    ResponseReview?:  {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    responseResponseReviewId?: string | null,
  } | null,
};

export type OnDeleteResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
};

export type OnDeleteResponseSubscription = {
  onDeleteResponse?:  {
    __typename: "Response",
    id: string,
    responseText?: string | null,
    responseStatus?: ResponseStatus | null,
    createdAt?: string | null,
    healthconcernID: string,
    expertID: string,
    ResponseReview?:  {
      __typename: "Review",
      id: string,
      responseId: string,
      rating: number,
      feedback?: string | null,
      createdAt?: string | null,
      userID: string,
      expertID: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
    responseResponseReviewId?: string | null,
  } | null,
};

export type OnCreateExpertSubscriptionVariables = {
  filter?: ModelSubscriptionExpertFilterInput | null,
};

export type OnCreateExpertSubscription = {
  onCreateExpert?:  {
    __typename: "Expert",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    mobile?: string | null,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    weeklySchedule?:  Array< {
      __typename: "DaySchedule",
      dayOfWeek: number,
      isAvailable?: boolean | null,
    } | null > | null,
    Specialization?: Specialization | null,
    ConsultationFee?: number | null,
    LanguageSpoken?: string | null,
    clinicLocation?: string | null,
    firebaseToken?: string | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    ExpertArticles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    HealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExpertSubscriptionVariables = {
  filter?: ModelSubscriptionExpertFilterInput | null,
};

export type OnUpdateExpertSubscription = {
  onUpdateExpert?:  {
    __typename: "Expert",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    mobile?: string | null,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    weeklySchedule?:  Array< {
      __typename: "DaySchedule",
      dayOfWeek: number,
      isAvailable?: boolean | null,
    } | null > | null,
    Specialization?: Specialization | null,
    ConsultationFee?: number | null,
    LanguageSpoken?: string | null,
    clinicLocation?: string | null,
    firebaseToken?: string | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    ExpertArticles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    HealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExpertSubscriptionVariables = {
  filter?: ModelSubscriptionExpertFilterInput | null,
};

export type OnDeleteExpertSubscription = {
  onDeleteExpert?:  {
    __typename: "Expert",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    mobile?: string | null,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    weeklySchedule?:  Array< {
      __typename: "DaySchedule",
      dayOfWeek: number,
      isAvailable?: boolean | null,
    } | null > | null,
    Specialization?: Specialization | null,
    ConsultationFee?: number | null,
    LanguageSpoken?: string | null,
    clinicLocation?: string | null,
    firebaseToken?: string | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    ExpertArticles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    HealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHealthConcernSubscriptionVariables = {
  filter?: ModelSubscriptionHealthConcernFilterInput | null,
};

export type OnCreateHealthConcernSubscription = {
  onCreateHealthConcern?:  {
    __typename: "HealthConcern",
    id: string,
    title: string,
    description: string,
    concernStatus?: ConcernStatus | null,
    attachments?: string | null,
    createdAt?: string | null,
    userID: string,
    preferredDate?: string | null,
    preferredTimeSlot?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    expertId?: string | null,
    Expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    concernType?: ConcernType | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateHealthConcernSubscriptionVariables = {
  filter?: ModelSubscriptionHealthConcernFilterInput | null,
};

export type OnUpdateHealthConcernSubscription = {
  onUpdateHealthConcern?:  {
    __typename: "HealthConcern",
    id: string,
    title: string,
    description: string,
    concernStatus?: ConcernStatus | null,
    attachments?: string | null,
    createdAt?: string | null,
    userID: string,
    preferredDate?: string | null,
    preferredTimeSlot?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    expertId?: string | null,
    Expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    concernType?: ConcernType | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteHealthConcernSubscriptionVariables = {
  filter?: ModelSubscriptionHealthConcernFilterInput | null,
};

export type OnDeleteHealthConcernSubscription = {
  onDeleteHealthConcern?:  {
    __typename: "HealthConcern",
    id: string,
    title: string,
    description: string,
    concernStatus?: ConcernStatus | null,
    attachments?: string | null,
    createdAt?: string | null,
    userID: string,
    preferredDate?: string | null,
    preferredTimeSlot?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      firebaseToken?: string | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    expertId?: string | null,
    Expert?:  {
      __typename: "Expert",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email: string,
      mobile?: string | null,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
      Specialization?: Specialization | null,
      ConsultationFee?: number | null,
      LanguageSpoken?: string | null,
      clinicLocation?: string | null,
      firebaseToken?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    concernType?: ConcernType | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateFamilyMemberSubscriptionVariables = {
  filter?: ModelSubscriptionFamilyMemberFilterInput | null,
};

export type OnCreateFamilyMemberSubscription = {
  onCreateFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    weight?: number | null,
    height?: number | null,
    dob?: string | null,
    relation?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFamilyMemberSubscriptionVariables = {
  filter?: ModelSubscriptionFamilyMemberFilterInput | null,
};

export type OnUpdateFamilyMemberSubscription = {
  onUpdateFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    weight?: number | null,
    height?: number | null,
    dob?: string | null,
    relation?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFamilyMemberSubscriptionVariables = {
  filter?: ModelSubscriptionFamilyMemberFilterInput | null,
};

export type OnDeleteFamilyMemberSubscription = {
  onDeleteFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    weight?: number | null,
    height?: number | null,
    dob?: string | null,
    relation?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
    firebaseToken?: string | null,
    subscriptionStatus?: SubscriptionStatus | null,
    UserFamilyMembers?:  {
      __typename: "ModelFamilyMemberConnection",
      nextToken?: string | null,
    } | null,
    UserHealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    UserReviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profilePictureUrl?: string | null,
    profileStatus?: ProfileStatus | null,
    UserReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
    firebaseToken?: string | null,
    subscriptionStatus?: SubscriptionStatus | null,
    UserFamilyMembers?:  {
      __typename: "ModelFamilyMemberConnection",
      nextToken?: string | null,
    } | null,
    UserHealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    UserReviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profilePictureUrl?: string | null,
    profileStatus?: ProfileStatus | null,
    UserReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
    firebaseToken?: string | null,
    subscriptionStatus?: SubscriptionStatus | null,
    UserFamilyMembers?:  {
      __typename: "ModelFamilyMemberConnection",
      nextToken?: string | null,
    } | null,
    UserHealthConcerns?:  {
      __typename: "ModelHealthConcernConnection",
      nextToken?: string | null,
    } | null,
    UserReviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profilePictureUrl?: string | null,
    profileStatus?: ProfileStatus | null,
    UserReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    appointments?:  {
      __typename: "ModelAppointmentConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

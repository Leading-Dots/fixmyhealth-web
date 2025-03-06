/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export enum ResponseStatus {
  DRAFT = "DRAFT",
  SUBMITTED = "SUBMITTED",
  REVIEWED = "REVIEWED",
}


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
  firstName?: string,
  lastName?: string,
  email: string,
  mobile?: string,
  education?: string | null,
  introduction?: string | null,
  profilePictureUrl?: string | null,
  experience?: string | null,
  averageRating?: number | null,
  totalReviews?: number | null,
  profileStatus?: ProfileStatus | null,
};

export enum ProfileStatus {
  PENDING = "PENDING",
  PUBLISHED = "PUBLISHED",
  REJECTED = "REJECTED",
}


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

export type ModelProfileStatusInput = {
  eq?: ProfileStatus | null,
  ne?: ProfileStatus | null,
};

export type Expert = {
  __typename: "Expert",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  mobile: string,
  education?: string | null,
  introduction?: string | null,
  profilePictureUrl?: string | null,
  experience?: string | null,
  averageRating?: number | null,
  totalReviews?: number | null,
  ExpertResponse?: ModelResponseConnection | null,
  ExpertReview?: ModelReviewConnection | null,
  profileStatus?: ProfileStatus | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelResponseConnection = {
  __typename: "ModelResponseConnection",
  items:  Array<Response | null >,
  nextToken?: string | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
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
};

export enum ConcernStatus {
  PENDING = "PENDING",
  ANSWERED = "ANSWERED",
  CLOSED = "CLOSED",
}


export type ModelHealthConcernConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  concernStatus?: ModelConcernStatusInput | null,
  attachments?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelHealthConcernConditionInput | null > | null,
  or?: Array< ModelHealthConcernConditionInput | null > | null,
  not?: ModelHealthConcernConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelConcernStatusInput = {
  eq?: ConcernStatus | null,
  ne?: ConcernStatus | null,
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
  HealthConcernResponses?: ModelResponseConnection | null,
  updatedAt: string,
};

export type UpdateHealthConcernInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  concernStatus?: ConcernStatus | null,
  attachments?: string | null,
  createdAt?: string | null,
  userID?: string | null,
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
  firstName?: string,
  lastName?: string,
  email?: string | null,
  dob?: string | null,
  mobile?: string | null,
  address?: string | null,
  height?: number | null,
  weight?: number | null,
  subscriptionStatus?: SubscriptionStatus | null,
  profilePictureUrl?: string | null,
  profileStatus?: ProfileStatus | null,
};

export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  EXPIRED = "EXPIRED",
}


export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  address?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  email?: string | null,
  dob?: string | null,
  mobile?: string | null,
  address?: string | null,
  height?: number | null,
  weight?: number | null,
  subscriptionStatus?: SubscriptionStatus | null,
  UserFamilyMembers?: ModelFamilyMemberConnection | null,
  UserHealthConcerns?: ModelHealthConcernConnection | null,
  UserReviews?: ModelReviewConnection | null,
  profilePictureUrl?: string | null,
  profileStatus?: ProfileStatus | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFamilyMemberConnection = {
  __typename: "ModelFamilyMemberConnection",
  items:  Array<FamilyMember | null >,
  nextToken?: string | null,
};

export type ModelHealthConcernConnection = {
  __typename: "ModelHealthConcernConnection",
  items:  Array<HealthConcern | null >,
  nextToken?: string | null,
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
  subscriptionStatus?: SubscriptionStatus | null,
  profilePictureUrl?: string | null,
  profileStatus?: ProfileStatus | null,
};

export type DeleteUserInput = {
  id: string,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
  subscriptionStatus?: ModelSubscriptionStringInput | null,
  profilePictureUrl?: ModelSubscriptionStringInput | null,
  profileStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
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
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
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
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
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
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
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
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
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
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
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
    firstName: string,
    lastName: string,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
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
    firstName: string,
    lastName: string,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
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
    firstName: string,
    lastName: string,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
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
    createdAt: string,
    updatedAt: string,
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
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
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
      firstName: string,
      lastName: string,
      email: string,
      mobile: string,
      education?: string | null,
      introduction?: string | null,
      profilePictureUrl?: string | null,
      experience?: string | null,
      averageRating?: number | null,
      totalReviews?: number | null,
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
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
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
    firstName: string,
    lastName: string,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
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
      firstName: string,
      lastName: string,
      email?: string | null,
      dob?: string | null,
      mobile?: string | null,
      address?: string | null,
      height?: number | null,
      weight?: number | null,
      subscriptionStatus?: SubscriptionStatus | null,
      profilePictureUrl?: string | null,
      profileStatus?: ProfileStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
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
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
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
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    education?: string | null,
    introduction?: string | null,
    profilePictureUrl?: string | null,
    experience?: string | null,
    averageRating?: number | null,
    totalReviews?: number | null,
    ExpertResponse?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    ExpertReview?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
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
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
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
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
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
    HealthConcernResponses?:  {
      __typename: "ModelResponseConnection",
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
    firstName: string,
    lastName: string,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
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
    firstName: string,
    lastName: string,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
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
    firstName: string,
    lastName: string,
    email?: string | null,
    dob?: string | null,
    mobile?: string | null,
    address?: string | null,
    height?: number | null,
    weight?: number | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

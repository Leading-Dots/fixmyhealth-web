import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ConcernType {
  TEXT = "TEXT",
  IN_CLINIC = "IN_CLINIC",
  AUDIO_CALL = "AUDIO_CALL",
  VIDEO_CALL = "VIDEO_CALL"
}

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
  DIETICIAN = "DIETICIAN"
}

export enum ProfileStatus {
  PENDING = "PENDING",
  PUBLISHED = "PUBLISHED",
  REJECTED = "REJECTED"
}

export enum ResponseStatus {
  DRAFT = "DRAFT",
  SUBMITTED = "SUBMITTED",
  REVIEWED = "REVIEWED"
}

export enum ConcernStatus {
  PENDING = "PENDING",
  ANSWERED = "ANSWERED",
  CLOSED = "CLOSED"
}

export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  EXPIRED = "EXPIRED"
}

type EagerTimeSlot = {
  readonly startTime: string;
  readonly endTime: string;
}

type LazyTimeSlot = {
  readonly startTime: string;
  readonly endTime: string;
}

export declare type TimeSlot = LazyLoading extends LazyLoadingDisabled ? EagerTimeSlot : LazyTimeSlot

export declare const TimeSlot: (new (init: ModelInit<TimeSlot>) => TimeSlot)

type EagerDaySchedule = {
  readonly dayOfWeek: number;
  readonly inClinicSlots?: (TimeSlot | null)[] | null;
  readonly audioCallSlots?: (TimeSlot | null)[] | null;
  readonly videoCallSlots?: (TimeSlot | null)[] | null;
  readonly breakSlots?: (TimeSlot | null)[] | null;
}

type LazyDaySchedule = {
  readonly dayOfWeek: number;
  readonly inClinicSlots?: (TimeSlot | null)[] | null;
  readonly audioCallSlots?: (TimeSlot | null)[] | null;
  readonly videoCallSlots?: (TimeSlot | null)[] | null;
  readonly breakSlots?: (TimeSlot | null)[] | null;
}

export declare type DaySchedule = LazyLoading extends LazyLoadingDisabled ? EagerDaySchedule : LazyDaySchedule

export declare const DaySchedule: (new (init: ModelInit<DaySchedule>) => DaySchedule)

type EagerReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Report, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly fileUrl?: string | null;
  readonly fileName?: string | null;
  readonly fileType?: string | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly appointmentID?: string | null;
  readonly healthConcernID?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Report, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly fileUrl?: string | null;
  readonly fileName?: string | null;
  readonly fileType?: string | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly appointmentID?: string | null;
  readonly healthConcernID?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Report = LazyLoading extends LazyLoadingDisabled ? EagerReport : LazyReport

export declare const Report: (new (init: ModelInit<Report>) => Report) & {
  copyOf(source: Report, mutator: (draft: MutableModel<Report>) => MutableModel<Report> | void): Report;
}

type EagerAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
  };
  readonly id: string;
  readonly concernType?: ConcernType | keyof typeof ConcernType | null;
  readonly concernStatus?: ConcernStatus | keyof typeof ConcernStatus | null;
  readonly appointmentDateTime?: string | null;
  readonly startTime: string;
  readonly endTime: string;
  readonly status?: string | null;
  readonly location?: string | null;
  readonly meetingLink?: string | null;
  readonly phoneNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly expertID: string;
  readonly reports?: (Report | null)[] | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
  };
  readonly id: string;
  readonly concernType?: ConcernType | keyof typeof ConcernType | null;
  readonly concernStatus?: ConcernStatus | keyof typeof ConcernStatus | null;
  readonly appointmentDateTime?: string | null;
  readonly startTime: string;
  readonly endTime: string;
  readonly status?: string | null;
  readonly location?: string | null;
  readonly meetingLink?: string | null;
  readonly phoneNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly expertID: string;
  readonly reports: AsyncCollection<Report>;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

type EagerArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly expertID?: string | null;
}

type LazyArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly expertID?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly responseId: string;
  readonly rating: number;
  readonly feedback?: string | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly expertID: string;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly responseId: string;
  readonly rating: number;
  readonly feedback?: string | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly expertID: string;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly responseText?: string | null;
  readonly responseStatus?: ResponseStatus | keyof typeof ResponseStatus | null;
  readonly createdAt?: string | null;
  readonly healthconcernID: string;
  readonly expertID: string;
  readonly ResponseReview?: Review | null;
  readonly updatedAt?: string | null;
  readonly responseResponseReviewId?: string | null;
}

type LazyResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly responseText?: string | null;
  readonly responseStatus?: ResponseStatus | keyof typeof ResponseStatus | null;
  readonly createdAt?: string | null;
  readonly healthconcernID: string;
  readonly expertID: string;
  readonly ResponseReview: AsyncItem<Review | undefined>;
  readonly updatedAt?: string | null;
  readonly responseResponseReviewId?: string | null;
}

export declare type Response = LazyLoading extends LazyLoadingDisabled ? EagerResponse : LazyResponse

export declare const Response: (new (init: ModelInit<Response>) => Response) & {
  copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

type EagerExpert = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expert, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly mobile?: string | null;
  readonly education?: string | null;
  readonly introduction?: string | null;
  readonly profilePictureUrl?: string | null;
  readonly experience?: string | null;
  readonly averageRating?: number | null;
  readonly totalReviews?: number | null;
  readonly weeklySchedule?: (DaySchedule | null)[] | null;
  readonly appointments?: (Appointment | null)[] | null;
  readonly ExpertResponse?: (Response | null)[] | null;
  readonly ExpertReview?: (Review | null)[] | null;
  readonly profileStatus?: ProfileStatus | keyof typeof ProfileStatus | null;
  readonly ExpertArticles?: (Article | null)[] | null;
  readonly Specialization?: Specialization | keyof typeof Specialization | null;
  readonly ConsultationFee?: number | null;
  readonly LanguageSpoken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExpert = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expert, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly mobile?: string | null;
  readonly education?: string | null;
  readonly introduction?: string | null;
  readonly profilePictureUrl?: string | null;
  readonly experience?: string | null;
  readonly averageRating?: number | null;
  readonly totalReviews?: number | null;
  readonly weeklySchedule?: (DaySchedule | null)[] | null;
  readonly appointments: AsyncCollection<Appointment>;
  readonly ExpertResponse: AsyncCollection<Response>;
  readonly ExpertReview: AsyncCollection<Review>;
  readonly profileStatus?: ProfileStatus | keyof typeof ProfileStatus | null;
  readonly ExpertArticles: AsyncCollection<Article>;
  readonly Specialization?: Specialization | keyof typeof Specialization | null;
  readonly ConsultationFee?: number | null;
  readonly LanguageSpoken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Expert = LazyLoading extends LazyLoadingDisabled ? EagerExpert : LazyExpert

export declare const Expert: (new (init: ModelInit<Expert>) => Expert) & {
  copyOf(source: Expert, mutator: (draft: MutableModel<Expert>) => MutableModel<Expert> | void): Expert;
}

type EagerHealthConcern = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HealthConcern, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly concernStatus?: ConcernStatus | keyof typeof ConcernStatus | null;
  readonly attachments?: string | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly HealthConcernResponses?: (Response | null)[] | null;
  readonly HealthConcernExpert?: Expert | null;
  readonly concernType?: ConcernType | keyof typeof ConcernType | null;
  readonly reports?: (Report | null)[] | null;
  readonly updatedAt?: string | null;
  readonly expertId?: string | null;
}

type LazyHealthConcern = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HealthConcern, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly concernStatus?: ConcernStatus | keyof typeof ConcernStatus | null;
  readonly attachments?: string | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly HealthConcernResponses: AsyncCollection<Response>;
  readonly HealthConcernExpert: AsyncItem<Expert | undefined>;
  readonly concernType?: ConcernType | keyof typeof ConcernType | null;
  readonly reports: AsyncCollection<Report>;
  readonly updatedAt?: string | null;
  readonly expertId?: string | null;
}

export declare type HealthConcern = LazyLoading extends LazyLoadingDisabled ? EagerHealthConcern : LazyHealthConcern

export declare const HealthConcern: (new (init: ModelInit<HealthConcern>) => HealthConcern) & {
  copyOf(source: HealthConcern, mutator: (draft: MutableModel<HealthConcern>) => MutableModel<HealthConcern> | void): HealthConcern;
}

type EagerFamilyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FamilyMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly weight?: number | null;
  readonly height?: number | null;
  readonly dob?: string | null;
  readonly relation?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFamilyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FamilyMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly weight?: number | null;
  readonly height?: number | null;
  readonly dob?: string | null;
  readonly relation?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FamilyMember = LazyLoading extends LazyLoadingDisabled ? EagerFamilyMember : LazyFamilyMember

export declare const FamilyMember: (new (init: ModelInit<FamilyMember>) => FamilyMember) & {
  copyOf(source: FamilyMember, mutator: (draft: MutableModel<FamilyMember>) => MutableModel<FamilyMember> | void): FamilyMember;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly dob?: string | null;
  readonly mobile?: string | null;
  readonly address?: string | null;
  readonly height?: number | null;
  readonly weight?: number | null;
  readonly subscriptionStatus?: SubscriptionStatus | keyof typeof SubscriptionStatus | null;
  readonly UserFamilyMembers?: (FamilyMember | null)[] | null;
  readonly UserHealthConcerns?: (HealthConcern | null)[] | null;
  readonly UserReviews?: (Review | null)[] | null;
  readonly profilePictureUrl?: string | null;
  readonly profileStatus?: ProfileStatus | keyof typeof ProfileStatus | null;
  readonly UserReports?: (Report | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly dob?: string | null;
  readonly mobile?: string | null;
  readonly address?: string | null;
  readonly height?: number | null;
  readonly weight?: number | null;
  readonly subscriptionStatus?: SubscriptionStatus | keyof typeof SubscriptionStatus | null;
  readonly UserFamilyMembers: AsyncCollection<FamilyMember>;
  readonly UserHealthConcerns: AsyncCollection<HealthConcern>;
  readonly UserReviews: AsyncCollection<Review>;
  readonly profilePictureUrl?: string | null;
  readonly profileStatus?: ProfileStatus | keyof typeof ProfileStatus | null;
  readonly UserReports: AsyncCollection<Report>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}
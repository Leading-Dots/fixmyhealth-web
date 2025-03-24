// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ConcernType = {
  "TEXT": "TEXT",
  "IN_CLINIC": "IN_CLINIC",
  "AUDIO_CALL": "AUDIO_CALL",
  "VIDEO_CALL": "VIDEO_CALL"
};

const Specialization = {
  "CARDIOLOGIST": "CARDIOLOGIST",
  "PEDIATRICIAN": "PEDIATRICIAN",
  "GYNECOLOGIST": "GYNECOLOGIST",
  "ORTHOPEDIC": "ORTHOPEDIC",
  "DERMATOLOGIST": "DERMATOLOGIST",
  "NEUROLOGIST": "NEUROLOGIST",
  "GENERAL_PHYSICIAN": "GENERAL_PHYSICIAN",
  "ENT_SPECIALIST": "ENT_SPECIALIST",
  "PSYCHIATRIST": "PSYCHIATRIST",
  "DIABETOLOGIST": "DIABETOLOGIST",
  "DIETICIAN": "DIETICIAN"
};

const ProfileStatus = {
  "PENDING": "PENDING",
  "PUBLISHED": "PUBLISHED",
  "REJECTED": "REJECTED"
};

const ResponseStatus = {
  "DRAFT": "DRAFT",
  "SUBMITTED": "SUBMITTED",
  "REVIEWED": "REVIEWED"
};

const ConcernStatus = {
  "PENDING": "PENDING",
  "ANSWERED": "ANSWERED",
  "CLOSED": "CLOSED"
};

const SubscriptionStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE",
  "EXPIRED": "EXPIRED"
};

const { Report, Appointment, Article, Review, Response, Expert, HealthConcern, FamilyMember, User, TimeSlot, DaySchedule } = initSchema(schema);

export {
  Report,
  Appointment,
  Article,
  Review,
  Response,
  Expert,
  HealthConcern,
  FamilyMember,
  User,
  ConcernType,
  Specialization,
  ProfileStatus,
  ResponseStatus,
  ConcernStatus,
  SubscriptionStatus,
  TimeSlot,
  DaySchedule
};
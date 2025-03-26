// TimeSlotInput type for slot timings
export type TimeSlotInput = {
    startTime: string;
    endTime: string;
  };
  
  // DaySchedule type to handle different types of slots
  export type DaySchedule = {
    dayOfWeek: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    inClinicSlots?: Array<TimeSlotInput | null> | null;
    audioCallSlots?: Array<TimeSlotInput | null> | null;
    videoCallSlots?: Array<TimeSlotInput | null> | null;
    breakSlots?: Array<TimeSlotInput | null> | null;
    isAvailable: boolean;
  };
  
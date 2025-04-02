import { useFormContext, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DayScheduleInput, TimeSlotInput } from "@/API";
import { Plus } from "lucide-react"; // Importing Plus Icon

const defaultSchedule: DayScheduleInput[] = [
  {
    dayOfWeek: 1,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 2,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 3,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 4,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 5,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 6,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
  {
    dayOfWeek: 0,
    inClinicSlots: [],
    audioCallSlots: [],
    videoCallSlots: [],
    breakSlots: [],
    isAvailable: false,
  },
];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function StepThree() {
  const { control, watch, setValue, trigger } = useFormContext();
  const weeklySchedule = watch("weeklySchedule") || defaultSchedule;

  console.log("weekly schedule in step 3", weeklySchedule);

  const addSlot = (dayIndex: number, type: keyof DayScheduleInput) => {
    const updatedSchedule = [...weeklySchedule];
    updatedSchedule[dayIndex][type] = [
      ...(updatedSchedule[dayIndex][type] || []),
      { startTime: "", endTime: "" },
    ];
    setValue("weeklySchedule", updatedSchedule);
  };

  const updateSlot = (
    dayIndex: number,
    slotIndex: number,
    type: keyof DayScheduleInput,
    field: keyof TimeSlotInput,
    value: string
  ) => {
    const updatedSchedule = [...weeklySchedule];
    if (updatedSchedule[dayIndex][type]?.[slotIndex]) {
      updatedSchedule[dayIndex][type]![slotIndex]![field] = value;
    }
    setValue("weeklySchedule", updatedSchedule);
  };

  const removeSlot = (
    dayIndex: number,
    slotIndex: number,
    type: keyof DayScheduleInput
  ) => {
    const updatedSchedule = [...weeklySchedule];
    updatedSchedule[dayIndex][type]?.splice(slotIndex, 1);
    setValue("weeklySchedule", updatedSchedule);
  };

  return (
    <div className="space-y-6">
      {weeklySchedule.map((schedule: DayScheduleInput, index: number) => (
        <div key={index} className="border p-4 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              {daysOfWeek[schedule.dayOfWeek]}
            </h3>
            <Controller
              name={`weeklySchedule[${index}].isAvailable`}
              control={control}
              render={({ field }) => (
                <div className="flex items-center space-x-2">
                  <Label>Available</Label>
                  <Switch
                    checked={field.value} 
                    onCheckedChange={(value) => {
                      setValue(`weeklySchedule[${index}].isAvailable`, value, { shouldDirty: true, shouldValidate: true });
                      trigger(`weeklySchedule[${index}].isAvailable`);
                    }}
                  />
                </div>
              )}
            />
          </div>
          {schedule?.isAvailable && (
            <>
              {[
                "inClinicSlots",
                "audioCallSlots",
                "videoCallSlots",
                "breakSlots",
              ].map((slotType) => (
                <div key={slotType} className="space-y-2">
                  <h4 className="text-sm font-medium capitalize">
                    {slotType.replace(/([A-Z])/g, " $1")}
                  </h4>
                  {(
                    (schedule[slotType as keyof DayScheduleInput] as
                      | TimeSlotInput[]
                      | null) || []
                  ).map((slot: TimeSlotInput, slotIndex: number) => (
                    <div key={slotIndex} className="flex gap-2 items-center">
                      <Input
                        type="time"
                        value={slot?.startTime || ""}
                        onChange={(e) =>
                          updateSlot(
                            index,
                            slotIndex,
                            slotType as keyof DayScheduleInput,
                            "startTime",
                            e.target.value
                          )
                        }
                        className="w-1/3"
                      />
                      <Input
                        type="time"
                        value={slot?.endTime || ""}
                        onChange={(e) =>
                          updateSlot(
                            index,
                            slotIndex,
                            slotType as keyof DayScheduleInput,
                            "endTime",
                            e.target.value
                          )
                        }
                        className="w-1/3"
                      />
                      <Button
                        variant="destructive"
                        type="button"
                        size="icon"
                        onClick={() =>
                          removeSlot(
                            index,
                            slotIndex,
                            slotType as keyof DayScheduleInput
                          )
                        }
                      >
                        ✕
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="ghost"
                    type="button"
                    size="sm"
                    onClick={() =>
                      addSlot(index, slotType as keyof DayScheduleInput)
                    }
                    className="bg-green-500 text-white hover:bg-green-600 rounded-md px-3 py-2 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Slot</span>
                  </Button>
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

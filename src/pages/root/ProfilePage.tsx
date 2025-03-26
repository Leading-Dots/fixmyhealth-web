import { ProfileStatus } from "@/API";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { useAuth } from "@/hooks/useAuth";
import { transformNullValues } from "@/lib/utils";
import { getExpert } from "@/graphql/queries";
import { useEffect, useState } from "react";
import client from "@/lib/apiClient";

const ProfilePage = () => {
  const { user } = useAuth();
  const [expertData, setExpertData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const isProfilePublished = user.profileStatus === ProfileStatus.PUBLISHED;

  // Fetch weeklySchedule from getExpert API
  const fetchExpertData = async () => {
    try {
      const expertResponse: any = await client.graphql({
        query: getExpert,
        variables: { id: user?.id }, 
      });
      setExpertData(expertResponse?.data?.getExpert);
    } catch (error) {
      console.error("Error fetching expert data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.role === "doctor") {
      fetchExpertData();
    } else {
      setLoading(false);
    }
  }, [user]);

  // Merge expert data with user data
  const mergedData = {
    ...user,
    weeklySchedule: expertData?.weeklySchedule || [],
  };

  // Transform data for the form
  const transformedData = transformNullValues(
    user?.role === "doctor" ? mergedData : user,
    user?.role
  );

  if (loading) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="flex flex-col max-w-2xl gap-2 p-4">
      <ProfileForm
        role={user?.role}
        isProfilePublished={isProfilePublished}
        initialData={transformedData}
      />
    </div>
  );
};

export default ProfilePage;

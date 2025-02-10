import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

function UserProfilePage() {
  const { updateMyUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  const { isLoading: isGetLoading, currentUser } = useGetMyUser();
  if (isGetLoading) {
    <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Failed to fetch user</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateMyUser}
      isLoading={isUpdateLoading}
    />
  );
}

export default UserProfilePage;

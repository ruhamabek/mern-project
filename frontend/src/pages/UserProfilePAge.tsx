import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

function UserProfilePage() {
  const { updateMyUser, isLoading } = useUpdateMyUser();

  return <UserProfileForm onSave={updateMyUser} isLoading={isLoading} />;
}

export default UserProfilePage;

"use client";

interface RefetchUserButtonProps {
  refetchUser: (userId: string) => Promise<any>;
  userId: string;
  user: any;
}
const RefetchUserButton = ({
  user,
  userId,
  refetchUser,
}: RefetchUserButtonProps) => {
  const handleRefreshClick = async () => {
    const update = await refetchUser(userId);
    console.log("clicked on update", { update });
  };
  return (
    <button onClick={handleRefreshClick} className="border-amber-600 p-4 w-fit">
      Refresh, user id: {userId} {user.email}
    </button>
  );
};

export default RefetchUserButton;

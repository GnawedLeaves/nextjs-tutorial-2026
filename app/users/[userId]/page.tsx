import { notFound } from "next/navigation";
import RefetchUserButton from "../refetchUserButton";
import { fetchUserAction } from "../actions";

interface UserPageProps {
  params: Promise<{ userId: string }>;
}

const fetchUser = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  if (!res.ok) {
    return null;
  }
  const user = res.json();
  return user;
};

const UserPage = async ({ params }: UserPageProps) => {
  const { userId } = await params;
  const user: any = await fetchUserAction(userId);

  if (!user) {
    notFound();
  }
  return (
    <div className="">
      <p>Email: {user.email}</p>
      <RefetchUserButton
        userId={userId}
        refetchUser={fetchUserAction}
        user={user}
      />
    </div>
  );
};

export default UserPage;

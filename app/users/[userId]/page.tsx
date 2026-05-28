import { notFound } from "next/navigation";

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
  const user: any = await fetchUser(userId);

  if (!user) {
    notFound();
  }
  return (
    <div className="">
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserPage;

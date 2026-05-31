"use server";

export const fetchUserAction = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  if (!res.ok) {
    return null;
  }
  return await res.json();
};

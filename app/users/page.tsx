const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div className="">
      {users.map((user: { id: number; name: string }) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );
};

export default UsersPage;

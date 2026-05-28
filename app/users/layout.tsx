const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>User navbar</h1>
      {children}
    </div>
  );
};

export default UserLayout;

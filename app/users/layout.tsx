import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My cool app",
  description: "This is qwe qeqe qwe q eqw e metadata",
  keywords: "about, company, company, mission,",
  twitter: {
    card: "summary_large_image",
    title: "users | my cool app",
  },
};

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>User navbar</h1>
      {children}
    </div>
  );
};

export default UserLayout;

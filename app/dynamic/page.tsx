const DynamicAndStaticPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return (
    <div className="">
      static time will not refresh when we build:{" "}
      {new Date().toLocaleTimeString()}
    </div>
  );
};

export default DynamicAndStaticPage;

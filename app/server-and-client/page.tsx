import ButtonComponent from "./button";

const ServerComponent = async () => {
  console.log("this is a server component");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div className="">
      <ButtonComponent
      // onClick={() => {
      //   console.log("button clicked show posts");
      // }}
      />

      {/* Will break because you cannot have hooks or user interactions in server components */}
      {/* <button
        onClick={() => {
          alert("server clicked");
        }}
      >
        Click me{" "}
      </button> */}
    </div>
  );
};

export default ServerComponent;

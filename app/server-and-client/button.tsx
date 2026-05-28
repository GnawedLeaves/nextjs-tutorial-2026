"use client";

interface ButtonComponentProps {}
const ButtonComponent = ({}: ButtonComponentProps) => {
  return (
    <button
      onClick={() => {
        alert("button clicked");
      }}
    >
      Click me bitch
    </button>
  );
};

export default ButtonComponent;

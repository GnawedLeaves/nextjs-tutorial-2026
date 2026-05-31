"use client";

import { useState } from "react";

const callPostReq = async () => {
  const res = await fetch(`/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "mr chow " }),
  });

  const data = await res.json();
  return { data };
};

const ContactPage = () => {
  const [data, setData] = useState<string>("");
  const callPostReq2 = async () => {
    const { data } = await callPostReq();
    setData(data.message);
  };
  return (
    <div className="">
      Contact page {data}
      <button
        onClick={() => {
          callPostReq2();
        }}
      >
        click me{" "}
      </button>
    </div>
  );
};

export default ContactPage;

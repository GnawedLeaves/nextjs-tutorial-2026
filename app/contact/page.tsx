const callPostReq = async () => {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "mr chow " }),
  });

  const data = await res.json();
  return { data };
};

const ContactPage = async () => {
  const { data } = await callPostReq();
  return <div className="">Contact page {data.message}</div>;
};

export default ContactPage;

import React from "react";

const Page = ({ params: { agencyId } }: { params: { agencyId: string } }) => {
  return <div>Page: {agencyId}</div>;
};

export default Page;

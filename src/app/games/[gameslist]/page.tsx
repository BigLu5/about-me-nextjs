import React from "react";
import Link from "next/link";

type gameParam = { params: { gameslist: string } };

export default function Page({ params }: gameParam) {
  return (
    <div>
      <h2>This is a dynamic route parameter: {params.gameslist}</h2>
      <Link href="/games">{`<-- Go back`}</Link>
    </div>
  );
}

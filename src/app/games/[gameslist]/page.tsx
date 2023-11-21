import React from "react";
import Link from "next/link";

type gameParam = { params: { gameslist: string } };

export function generateMetadata({ params }: gameParam) {
  const modTitle =
    params.gameslist[0].toUpperCase() + params.gameslist.slice(1);
  return {
    title: `Lukes Games - ${modTitle}`,
    description: `Lukes Games - fun facts about ${params.gameslist}`,
  };
}

export default function Page({ params }: gameParam) {
  return (
    <div>
      <h2>This is a dynamic route parameter: {params.gameslist}</h2>
      <Link href="/games">{`<-- Go back`}</Link>
    </div>
  );
}

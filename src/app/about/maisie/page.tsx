import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <p>My dogs name is Maisie</p>
      <Link href="/about">Go back to about</Link>
    </div>
  );
}

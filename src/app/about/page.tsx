import Link from "next/link";
import React from "react";
export default function Page() {
  return (
    <div>
      <h2>This is the about page</h2>
      <Link href="/about/me">Learn greats things about me </Link>
      <br />
      <a href="./about/maisie">Learn about Maisie</a>
    </div>
  );
}

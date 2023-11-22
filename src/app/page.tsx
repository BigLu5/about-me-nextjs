import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 style={{ textAlign: "center" }}>About Luke Reynolds</h2>
      <div className="relative">
        <Image
          src="/game-banner.png"
          alt="Game Banner"
          width={1152}
          height={300}
          style={{ borderRadius: "10px" }}
        />
      </div>
      <p style={{ textAlign: "center" }}>
        He once buttered bread before putting it in the toaster but has come a
        long way since then.
      </p>
      <p style={{ textAlign: "center" }}>
        Here is a quote to live by: "An elephant never forgets, but I forget
        what the elephant remembered."
      </p>
    </main>
  );
}

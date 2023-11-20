import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative">
        <Image
          src="/game-banner.png"
          alt="Game Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 style={{ textAlign: "center" }}>About Luke Reynolds</h2>
      <p style={{ textAlign: "center" }}>
        He once buttered bread before putting it in the toaster but has come a
        long way since then.
      </p>
      <p>
        Here is a quote to live by: "An elephant never forgets, but I forget
        what the elephant remembered."
      </p>
    </main>
  );
}

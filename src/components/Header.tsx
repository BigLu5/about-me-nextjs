import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">ABOUT ME</h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about/maisie">
                <div className="text-white">Maisie</div>
              </Link>
            </li>
            <li>
              <Link href="/about/me">
                <div className="text-white">Me</div>
              </Link>
            </li>
            <li>
              <Link href="/games">
                <div className="text-white">Games</div>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <div className="text-white">Blog Posts</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

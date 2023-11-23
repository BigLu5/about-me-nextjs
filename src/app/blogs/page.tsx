import React from "react";
import Link from "next/link";
import { getPosts } from "../../lib/posts";

export default async function BlogPage() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}. {""}
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

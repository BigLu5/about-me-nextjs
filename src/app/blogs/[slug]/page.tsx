import React from "react";
import { getPosts, getPostBySlug } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  // get the posts
  const posts = getPosts();

  // return an array of props objects that will be passed to
  // our page component one by one, generating a unique page
  // (in the example we use the post object, hard coded to more clearly show what is returned)
  return [
    { slug: "my-first-post" },
    { slug: "my-second-post" },
    { slug: "my-third-post" },
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  // if the post is missing, return a 404 by running the Next.js notFound function
  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="text-2xl">{post.title}</h1>
      {post.content}
      <br />
      <Link href="/blogs">Back to posts</Link>
    </main>
  );
}

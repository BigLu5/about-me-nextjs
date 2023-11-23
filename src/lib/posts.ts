// /lib/posts.ts
const POSTS = [
  {
    id: 1,
    title: "My first post",
    slug: "my-first-post",
    content: "This is my first ever post!",
    date: "2023-01-01 18:00:00.000",
  },
  {
    id: 2,
    title: "My second post",
    slug: "my-second-post",
    content: "This is my second ever post!",
    date: "2023-01-02 18:00:00.000",
  },
  {
    id: 3,
    title: "My third post",
    slug: "my-third-post",
    content: "This is my thirdever post!",
    date: "2023-01-03 18:00:00.000",
  },
];

export function getPosts() {
  return POSTS;
}

export function getPostById(postId: number) {
  return getPosts().find((post) => post.id === postId);
}

export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

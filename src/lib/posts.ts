// /lib/posts.ts
const POSTS = [
  {
    id: 1,
    title: "Discovering Next.js and TypeScript",
    slug: "my-first-post",
    content:
      "Luke, the coding explorer, braved Next.js and TypeScript. TypeScript's syntax resembled an enigmatic scroll, and Next.js routing felt like a jungle expedition. Types in his code multiplied like mischievous phantoms. Yet, undeterred, Luke conquered bugs, compiling triumphs, and emerged victorious from the rollercoaster, grinning with newfound coding prowess.",
    date: "2023-01-01 18:00:00.000",
  },
  {
    id: 2,
    title: "How To Make A Cheese Wheel",
    slug: "my-second-post",
    content:
      "To craft your own cheesewheel, start by selecting quality cheese, ensuring it's at room temperature. Grate or crumble the cheese and mix with desired herbs or spices. Press the blend into a mold, compacting it tightly. Allow the cheesewheel to chill for several hours or overnight to set. Once firm, carefully remove from the mold. Enhance flavors by letting it rest at room temperature before serving. Experiment with various cheeses and additives for a personalized touch. Serve your homemade cheesewheel with crackers or bread, showcasing your unique culinary creation for a delightful and flavorful experience.",
    date: "2023-01-02 18:00:00.000",
  },
  {
    id: 3,
    title: "TechEducators Full Stack MERN Bootcamp Review",
    slug: "my-third-post",
    content:
      "Luke, a novice in coding, embarked on a transformative journey with TechEducators' 12-week bootcamp. Faced with complex algorithms and debugging challenges, he persisted, leveraging online resources and mentor support. The structured curriculum and hands-on projects honed his skills. Grateful for the community and guidance, Luke conquered self-doubt, emerging proficient in coding languages. The bootcamp not only equipped him technically but instilled resilience and a collaborative spirit. Now, Luke's newfound expertise opens doors to exciting opportunities, a testament to his determination and TechEducators' empowering program.",
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

import BlogList from "@/features/blog/components/BlogList";
import { getAllBlogs } from "@/features/blog/api/blogApi";

export default async function Home() {
  const blogs = await getAllBlogs();

  return (
    <>
      <BlogList blogs={blogs} />
    </>
  );
}

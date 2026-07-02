export const dynamic = "force-dynamic";
import BlogList from "@/features/blog/components/BlogList";
import { getMyBlogs } from "@/shared/api/api-server";

export default async function MyBlogsPage() {
  const { data: blogs } = await getMyBlogs();

  return (
    <>
      {blogs?.length > 0 ? (
        <BlogList blogs={blogs} />
      ) : (
        <div className="flex items-center justify-center h-screen">
          No blogs found.
        </div>
      )}
    </>
  );
}

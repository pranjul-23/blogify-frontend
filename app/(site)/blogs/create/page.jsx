import BlogForm from "@/features/blog/components/BlogForm";
import { getBlogCategories } from "@/features/blog/api/blogApi";

export const metadata = {
  title: "Create Blog",
  description: "Create a new blog post",
};

export default async function CreateBlog() {
  const categories = await getBlogCategories();

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl text-center font-bold mb-6">Create Blog</h1>
      <div className="w-xl mx-auto">
        <BlogForm categories={categories} />
      </div>
    </main>
  );
}

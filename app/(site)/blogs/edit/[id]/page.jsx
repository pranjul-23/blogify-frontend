import BlogForm from "@/features/blog/components/BlogForm";
import { getBlogCategories, getBlogDetails } from "@/features/blog/api/blogApi";

export default async function EditBlogPage({ params }) {
  const { id } = await params;
  const [categories, blog] = await Promise.all([
    getBlogCategories(),
    getBlogDetails(id),
  ]);

  console.log("blog", blog);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl text-center font-bold mb-6">Edit Blog</h1>
      <div className="w-xl mx-auto">
        <BlogForm
          mode="edit"
          blogId={id}
          categories={categories}
          initialValues={{
            title: blog.title,
            description: blog.description,
            blogImage: blog.blogImage,
            category: blog.category,
          }}
        />
      </div>
    </div>
  );
}

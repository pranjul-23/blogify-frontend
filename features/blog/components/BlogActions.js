"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteBlog } from "../api/blogApis";

export default function BlogActions({ blogId }) {
  const router = useRouter();

  const handleBlogDelete = async () => {
    try {
      if (!confirm("Are you sure you want to delete this blog?")) {
        return;
      }
      await deleteBlog(blogId);
      toast.success("Blog deleted successfully.");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex justify-end gap-3">
      <Link
        href={`/blogs/edit/${blogId}`}
        className="text-blue-500 text-lg underline hover:text-blue-600"
      >
        Edit
      </Link>
      <button
        onClick={handleBlogDelete}
        className="px-3 py-1 bg-red-600 text-white rounded cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}

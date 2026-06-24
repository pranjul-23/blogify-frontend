import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogDetails } from "@/features/blog/api/blogApi";

export async function BlogDetails({ params }) {
  const { id } = await params;
  const blogData = await getBlogDetails(id);

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex items-center justify-end">
          <Link
            href={`/blogs/edit/${id}`}
            className="text-blue-500 text-lg underline hover:text-blue-600"
          >
            Edit
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Delete
          </button>
        </div>
        <div className="text-center my-8">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto mb-4">
            {blogData?.title}
          </h1>
          {/* <Image
            src={blogData?.author_img}
            alt="author"
            width={50}
            height={50}
            className="mx-auto mt-6 border border-white rounded-full"
            loading="eager"
          />
          <p className="mt-1 text-lg pb-2 max-w-175 mx-auto">
            {blogData?.author}
          </p> */}
        </div>
        <div className="mx-5 max-w-200 md:mx-auto mb-10">
          <Image
            src={blogData?.blogImage ?? null}
            alt="blog_img"
            width={1280}
            height={720}
            className="border-4 border-white"
            loading="eager"
          />
          <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
          <p>{blogData?.description}</p>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;

export const revalidate = 60;

import Image from "next/image";
import BlogActions from "@/features/blog/components/BlogActions";
import { getBlogDetails } from "@/features/blog/api/blogApis";
import Avatar from "@/shared/components/Avatar";

export async function BlogDetails({ params }) {
  const { id } = await params;
  const { data: blogData } = await getBlogDetails(id);
  const user = blogData.createdBy;

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <BlogActions blogId={id} />
        <div className="text-center my-8">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto mb-4">
            {blogData?.title}
          </h1>
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
          <p className="mb-5">{blogData?.description}</p>
          <h2 className="text-lg font-semibold mb-3">Author</h2>
          <div className="flex items-center gap-2">
            <Avatar user={user} />
            <span>{user.fullName}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;

import Avatar from "@/shared/components/Avatar";
import Image from "next/image";
import Link from "next/link";

const Card = ({ blog, icon = null }) => {
  const { createdBy: user } = blog;

  return (
    <div className="max-w-70 sm:max-w-65 bg-white border border-black hover:shadow-[-5px_5px_0px_#000000]">
      <Link href={`/blogs/${blog._id}`}>
        <Image
          src={blog.blogImage}
          width={400}
          height={400}
          alt="blog_pic"
          className="border-b border-black"
          placeholder="blur"
          blurDataURL="data:image/..."
        />
      </Link>
      <p className="text-sm text-white bg-black px-1 mt-5 ml-5 inline-block">
        {blog.category}
      </p>
      <div className="p-5">
        <h5 className="text-lg mb-5 font-medium tracking-tight text-gray-900">
          {blog.title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {blog.description}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <Avatar user={user} />
          <span>{user.fullName}</span>
        </div>
        <Link
          href={`/blogs/${blog._id}`}
          className="inline-flex items-center gap-1.5 py-2 font-semibold text-center cursor-pointer"
        >
          Read more <Image src={icon} alt="arrow_icon" width={12} />
        </Link>
      </div>
    </div>
  );
};

export default Card;

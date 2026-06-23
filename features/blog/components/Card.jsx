import Image from "next/image";
import Link from "next/link";

const Card = ({ id, image, title, description, category, icon = null }) => {
  return (
    <div className="max-w-70 sm:max-w-65 bg-white border border-black hover:shadow-[-5px_5px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          width={400}
          height={400}
          alt="blog_pic"
          className="border-b border-black"
        />
      </Link>
      <p className="text-sm text-white bg-black px-1 mt-5 ml-5 inline-block">
        {category}
      </p>
      <div className="p-5">
        <h5 className="text-lg mb-5 font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center gap-1.5 py-2 font-semibold text-center cursor-pointer"
        >
          Read more <Image src={icon} alt="arrow_icon" width={12} />
        </Link>
      </div>
    </div>
  );
};

export default Card;

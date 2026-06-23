"use client";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <>
      <button className="md:hidden text-gray-700 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="md:hidden pb-4">
        <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
          Home
        </Link>

        <Link
          href="/blogs"
          className="block py-2 text-gray-700 hover:text-blue-600"
        >
          Blogs
        </Link>

        <Link
          href="/blogs/new"
          className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700"
        >
          Add Blog
        </Link>
      </div>
    </>
  );
}

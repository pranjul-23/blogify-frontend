"use client";
import { useState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { useRouter } from "next/navigation";
import { logout } from "@/features/auth/api/authApis";
import toast from "react-hot-toast";

export default function Header({ user = null }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("User is logged out.");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-[#eee] shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {" "}
            Blogify{" "}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/blogs/create"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Create Blog
                </Link>
                <UserMenu user={user} onLogout={handleLogout} />
              </div>
            ) : (
              <div className="flex gap-4">
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Signup
                </Link>
                <Link
                  href="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
          {/* Mobile menu button  */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
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
        </div>
        {showMobileMenu && (
          <div className="pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/blogs/my-blogs"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              My Blogs
            </Link>

            <Link
              href="/blogs/create"
              className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700"
            >
              Create Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

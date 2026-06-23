import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="bg-[#eee] shadow-md">
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

            <Link
              href="/blogs/create"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add Blog
            </Link>
          </div>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

import Link from "next/link";
import Avatar from "./Avatar";

export default function UserMobileMenu({ user, onLogout, closeMenu }) {
  return (
    <div className="absolute left-0 top-full w-full border-t bg-white shadow-lg md:hidden">
      {user ? (
        <>
          {/* User Info */}
          <div className="flex items-center gap-3 border-b p-4">
            <Avatar user={user} />
            <div>
              <p className="font-semibold text-gray-900">{user.fullName}</p>
              <p className="text-sm text-gray-500 truncate">{user.email}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col py-2">
            <Link
              href="/profile"
              onClick={closeMenu}
              className="px-4 py-3 hover:bg-gray-100"
            >
              My Profile
            </Link>

            <Link
              href="/blogs/my-blogs"
              onClick={closeMenu}
              className="px-4 py-3 hover:bg-gray-100"
            >
              My Blogs
            </Link>

            <Link
              href="/blogs/create"
              onClick={closeMenu}
              className="px-4 py-3 hover:bg-blue-700"
            >
              Create Blog
            </Link>

            <button
              onClick={onLogout}
              className="px-4 py-3 text-left text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </nav>
        </>
      ) : (
        <div className="flex flex-col gap-3 p-4">
          <Link
            href="/login"
            onClick={closeMenu}
            className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            onClick={closeMenu}
            className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}

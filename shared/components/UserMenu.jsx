"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useClickOutside } from "@/hooks/useClickOutside";
import Avatar from "./Avatar";

export default function ProfileDropdown({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer rounded-full focus:outline-none"
      >
        <Avatar user={user} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-xl border z-50 overflow-hidden">
          <div className="px-4 py-4 border-b">
            <p className="font-semibold text-gray-900">{user.fullName}</p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
          </div>

          <div className="py-2">
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
              👤 My Profile
            </Link>

            <Link
              href="/blogs/my-blogs"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              📝 My Blogs
            </Link>

            <hr className="my-2" />

            <button
              onClick={onLogout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

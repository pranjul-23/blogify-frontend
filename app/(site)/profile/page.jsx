export const dynamic = "force-dynamic";

import Avatar from "@/shared/components/Avatar";
import { getCurrentUser } from "@/shared/api/api-server";

export default async function ProfilePage() {
  const { data: user } = await getCurrentUser();
  console.log("user", user);
  return (
    <div className="min-h-[calc(100vh-160px)] bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Content */}
        <div className="px-8 pb-8">
          {/* Avatar */}
          <div className="mt-10 flex justify-center">
            <Avatar user={user} />
          </div>

          {/* User Info */}
          <div className="mt-5 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {user.fullName}
            </h1>

            <p className="text-gray-500 mt-2">{user.email}</p>

            <span className="inline-flex mt-4 rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-semibold">
              {user.role}
            </span>
          </div>

          {/* Details */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="mt-1 font-semibold text-gray-900">
                {user.fullName}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="mt-1 font-semibold text-gray-900">{user.email}</p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Role</p>
              <p className="mt-1 font-semibold text-gray-900">{user.role}</p>
            </div>

            {/* <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="mt-1 font-semibold text-gray-900">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

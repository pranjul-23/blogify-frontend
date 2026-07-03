import Image from "next/image";

export default function Avatar({ user }) {
  return (
    <>
      {user?.profileImage ? (
        <Image
          src={user.profileImage}
          width={40}
          height={40}
          alt={user.fullName}
          className="rounded-full object-cover border"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {user?.fullName?.charAt(0).toUpperCase()}
        </div>
      )}
    </>
  );
}

"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { signupSchema } from "../validation/signupSchema";
import { signupUser } from "../api/authApis";
import toast from "react-hot-toast";
import { formatRole } from "@/utils/formatRole";
import FileUpload from "@/shared/components/FileUpload";
import Link from "next/link";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "USER",
  profileImage: "",
};

export default function SignupForm() {
  const router = useRouter();
  const roles = ["USER", "ADMIN"];
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: initialState,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        await signupUser(values);
        toast.success("User created successfully.");
        router.replace("/login");
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const onUploadSuccess = (file) => {
    setFieldValue("profileImage", file.filepath);
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold">Create Account</h2>

        <p className="mt-2 text-gray-500">Start your blogging journey.</p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-5">
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              className="w-full rounded-lg border py-3 px-2"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.fullName && errors.fullName && (
              <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border py-3 px-2"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border py-3 px-2"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              className="w-full rounded-lg border py-3 px-2"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">User Role</label>
            <select
              value={values.role}
              className="w-full rounded-lg border py-3 px-2"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {formatRole(role)}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              User Profile
            </label>
            <FileUpload folder="profiles" onUploadSuccess={onUploadSuccess} />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 text-white cursor-pointer disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            Sign up
          </button>
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

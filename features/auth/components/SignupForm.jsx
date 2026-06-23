"use client";
import { useFormik } from "formik";
import { signupSchema } from "../validation/signupSchema";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignupForm() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: initialState,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      console.log("values", values);
    },
  });

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
            {touched && errors && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
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
            {touched && errors && (
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
            {touched && errors && (
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
            {touched && errors && (
              <p className="text-sm text-red-500 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 text-white cursor-pointer disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

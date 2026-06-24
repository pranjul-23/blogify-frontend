"use client";

import { useFormik } from "formik";
import toast from "react-hot-toast";
import FileUpload from "../../../shared/components/FileUpload";
import { blogSchema } from "../validation/blogSchema";
import { createBlog, updateBlog } from "../api/blogApi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const initialState = {
  title: "",
  description: "",
  blogImage: "",
  category: "Startup",
};

export default function BlogForm({
  initialValues = initialState,
  categories,
  mode = "create",
  blogId = null,
}) {
  const router = useRouter();
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: blogSchema,
    onSubmit: async (values) => {
      try {
        if (mode === "create") {
          await createBlog(values);
          toast.success("Blog published successfully!");
          resetForm();
        } else {
          await updateBlog(blogId, values);
          toast.success("Blog updated successfully!");
        }
        router.push("/");
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const onUploadSuccess = (file) => {
    setFieldValue("blogImage", file.filepath);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="block text-sm mb-1">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter the title"
          value={values.title}
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full border rounded-lg py-3 px-2"
        />
        {touched.title && errors.title && (
          <p className="text-sm text-red-500 font-medium mt-1">
            {errors.title}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1">Description</label>
        <textarea
          name="description"
          value={values.description}
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full border rounded-lg py-3 px-2"
        ></textarea>
        {touched.description && errors.description && (
          <p className="text-sm text-red-500 font-medium mt-1">
            {errors.description}
          </p>
        )}
      </div>
      <div className="mb-3">
        <label className="block text-sm mb-1">Blog Image</label>
        {values.blogImage && (
          <Image
            src={values.blogImage}
            width={800}
            height={400}
            alt="blog_pic"
            className="border-b border-black mb-2"
            placeholder="blur"
            blurDataURL="data:image/..."
          />
        )}
        <FileUpload onUploadSuccess={onUploadSuccess} />

        {touched.blogImage && errors.blogImage && (
          <p className="text-sm text-red-500 font-medium mt-1">
            {errors.blogImage}
          </p>
        )}
      </div>
      <div className="mb-3">
        <label className="block text-sm mb-1">Category</label>
        <select
          name="category"
          value={values.category}
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full border rounded-sm p-2"
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer disabled:bg-green-50"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? mode === "edit"
            ? "Updating..."
            : "Publishing..."
          : mode === "edit"
            ? "Update Blog"
            : "Publish"}
      </button>
    </form>
  );
}

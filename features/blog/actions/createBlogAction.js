"use server";
import { createBlog } from "../api/blogApi";

export async function createBlogAction(_prevState, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const blogImage = formData.get("blogImage");

  const errors = {};

  if (!title?.trim()) {
    errors.title = ["Title is required"];
  }

  if (!description?.trim()) {
    errors.description = ["Description is required"];
  }

  if (!category?.trim()) {
    errors.category = ["Category is required"];
  }

  if (!blogImage?.trim()) {
    errors.blogImage = ["Blog image is required"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: "",
      errors,
    };
  }

  try {
    const response = await createBlog({
      title,
      description,
      category,
      blogImage,
    });

    if (!response.ok) {
      return {
        message: "",
        errors: response.data.errors || {},
      };
    }

    return {
      message: "Blog created successfully",
      errors: {},
    };
  } catch {
    return {
      message: "",
      errors: {
        form: ["Unable to connect to server"],
      },
    };
  }
}

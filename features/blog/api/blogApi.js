import { config } from "@/config";
import { BLOG_API_PATHS } from "./apiPaths";

export async function getBlogCategories() {
  try {
    const response = await fetch(
      `${config.apiBaseUrl}${BLOG_API_PATHS.categories}`,
    );

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error("Failed to fetch categories", error);
    throw error;
  }
}

export async function handleFileupload(formData) {
  try {
    const response = await fetch(
      `${config.apiBaseUrl}${BLOG_API_PATHS.upload}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();
    return {
      sucess: response.ok,
      data: data?.data,
      errors: data?.errors,
    };
  } catch (error) {
    console.error("File upload request failed", error);
    throw error;
  }
}

export async function createBlog(payload) {
  try {
    const response = await fetch(
      `${config.apiBaseUrl}${BLOG_API_PATHS.create}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();
    return {
      sucess: response.ok,
      data: data?.data,
      errors: data?.errors,
    };
  } catch (error) {
    console.error("Failed to publish blog", error);
    throw error;
  }
}

export async function getAllBlogs() {
  try {
    const response = await fetch(
      `${config.apiBaseUrl}${BLOG_API_PATHS.getAllBlogs}`,
    );
    const data = await response.json();
    return {
      sucess: response.ok,
      data: data?.data,
      errors: data?.errors,
    };
  } catch (error) {
    console.error("Failed to fetch blogs", error);
    throw error;
  }
}

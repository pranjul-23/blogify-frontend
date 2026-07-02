import { apiClient } from "@/shared/api/apiClient";
import { BLOG_API_PATHS } from "./apiPaths";

export function getBlogCategories() {
  return apiClient(BLOG_API_PATHS.categories);
}

export function getAllBlogs() {
  return apiClient(BLOG_API_PATHS.getAllBlogs);
}

export function getBlogDetails(id) {
  return apiClient(`${BLOG_API_PATHS.getBlogDetails}/${id}`);
}

export function createBlog(payload) {
  return apiClient(BLOG_API_PATHS.create, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export function updateBlog(id, payload) {
  return apiClient(`${BLOG_API_PATHS.update}/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export function uploadFile(formData) {
  return apiClient(BLOG_API_PATHS.upload, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
}

export function deleteBlog(id) {
  return apiClient(`${BLOG_API_PATHS.delete}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
}

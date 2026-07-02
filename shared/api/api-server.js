// services/auth.server.js

import { cookies } from "next/headers";
import { apiClient } from "./apiClient";
import { AUTH_API_PATHS } from "@/features/auth/api/apiPaths";
import { BLOG_API_PATHS } from "@/features/blog/api/apiPaths";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  return apiClient(AUTH_API_PATHS.currentUser, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
}

export async function getMyBlogs() {
  const cookieStore = await cookies();

  return apiClient(BLOG_API_PATHS.myBlogs, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
}

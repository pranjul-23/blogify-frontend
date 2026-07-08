import { apiClient } from "@/shared/api/apiClient";
import { AUTH_API_PATHS } from "./apiPaths";
import { ApiError } from "next/dist/server/api-utils";

export async function signupUser(payload) {
  return apiClient(AUTH_API_PATHS.signup, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function loginUser(payload) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(
      response.status,
      data?.message || "Something went wrong.",
    );
  }

  return data;
}

export async function logout() {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(
      response.status,
      data?.message || "Something went wrong.",
    );
  }

  return data;
}

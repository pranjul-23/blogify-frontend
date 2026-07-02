import { apiClient } from "@/shared/api/apiClient";
import { AUTH_API_PATHS } from "./apiPaths";

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
  return apiClient(AUTH_API_PATHS.login, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function logout() {
  return apiClient(AUTH_API_PATHS.logout, {
    method: "POST",
    credentials: "include",
  });
}

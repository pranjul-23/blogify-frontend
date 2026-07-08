// shared/api/apiClient.js

import { config } from "@/config";
import { ApiError } from "./api-error";

export async function apiClient(url, options = {}) {
  try {
    const response = await fetch(`${config.apiBaseUrl}${url}`, {
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        response.status,
        data?.message || "Something went wrong.",
      );
    }

    return data;
  } catch (error) {
    throw error;
  }
}

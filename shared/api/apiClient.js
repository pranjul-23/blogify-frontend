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
      const errorMessage =
        data?.message ||
        data?.errors?.file?.[0] ||
        (typeof data?.errors === "string" ? data.errors : null) ||
        (typeof data === "string" && data.length < 200 ? data : null) ||
        response.statusText ||
        "Something went wrong.";

      throw new ApiError(
        response.status,
        errorMessage,
        data?.errors || null,
        data,
      );
    }

    return data;
  } catch (error) {
    throw error;
  }
}

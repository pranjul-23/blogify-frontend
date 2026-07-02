// shared/api/apiClient.js

import { config } from "@/config";

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

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

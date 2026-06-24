// shared/api/apiClient.js

import { config } from "@/config";

export async function apiClient(url, options = {}) {
  try {
    const response = await fetch(`${config.apiBaseUrl}${url}`, {
      credentials: "include",
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Something went wrong.");
    }

    return data.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

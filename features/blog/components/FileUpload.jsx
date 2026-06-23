"use client";
import { useState } from "react";
import { handleFileupload } from "../api/blogApi";

export default function FileUpload({ onUploadSuccess }) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    try {
      setIsUploading(true);
      const result = await handleFileupload(formData);
      console.log("result", result);
      if (!result.sucess) {
        setError(result.errors.file[0]);
        return;
      }

      onUploadSuccess({
        filename: result.data?.filename,
        filepath: result.data?.filepath,
      });
      setError("");
    } catch (error) {
      console.error(error);
      setError(error?.message);
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <>
      <div>
        <input
          type="file"
          name="file"
          className="w-full border rounded-sm p-2"
          onChange={handleFileChange}
        />
      </div>
      {isUploading && <p className="text-xs">Uploading...</p>}
      {error && <p className="text-xs text-red-700">{error}</p>}
    </>
  );
}

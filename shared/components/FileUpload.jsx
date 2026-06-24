"use client";
import { useState } from "react";
import { uploadFile } from "../../features/blog/api/blogApi";

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
      const uploadedFile = await uploadFile(formData);

      onUploadSuccess({
        filename: uploadedFile.filename,
        filepath: uploadedFile.filepath,
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
      {isUploading && <p className="text-sm">Uploading...</p>}
      {error && (
        <p className="text-sm text-red-500 font-medium mt-1">{error}</p>
      )}
    </>
  );
}

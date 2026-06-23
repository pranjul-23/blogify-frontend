"use client";
import { useState, useActionState } from "react";
import { createBlogAction } from "../actions/createBlogAction";
import FileUpload from "./FileUpload";

const initialState = {
  message: "",
  errors: {},
};
export default function BlogForm({ categories }) {
  const [filepath, setFilepath] = useState("");
  const [state, formAction, isPending] = useActionState(
    createBlogAction,
    initialState,
  );

  const onUploadSuccess = (file) => {
    setFilepath(file.filepath);
  };
  return (
    <form action={formAction}>
      <div className="mb-4">
        <div className="flex flex-col justify-center gap-1.5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border rounded-sm p-2"
          />
        </div>
        {state.errors?.title?.[0] && (
          <p className="text-xs text-red-900">{state.errors.title[0]}</p>
        )}
      </div>
      <div className="mb-4">
        <div className="flex flex-col justify-center gap-1.5">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="border rounded-sm p-2"
          ></textarea>
        </div>
        {state.errors?.description?.[0] && (
          <p className="text-xs text-red-900">{state.errors.description[0]}</p>
        )}
      </div>
      <div className="mb-4">
        <div className="flex flex-col justify-center gap-1.5">
          <label htmlFor="description">Blog Image</label>
          <input type="hidden" name="blogImage" value={filepath ?? ""} />
          <FileUpload onUploadSuccess={onUploadSuccess} />
        </div>
        {state.errors?.blogImage?.[0] && (
          <p className="text-xs text-red-900">{state.errors.blogImage[0]}</p>
        )}
      </div>
      <div className="mb-4">
        <div className="flex flex-col justify-center gap-1.5">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="border rounded-sm p-2"
          >
            {categories?.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer disabled:bg-green-50"
        disabled={isPending}
      >
        {isPending ? "Publishing..." : "Publish"}
      </button>
    </form>
  );
}

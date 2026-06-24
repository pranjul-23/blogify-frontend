import * as Yup from "yup";

export const blogSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  blogImage: Yup.string().required("Image is required"),
});

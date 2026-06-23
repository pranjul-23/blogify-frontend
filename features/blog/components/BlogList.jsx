"use client";

import { useState, useCallback } from "react";
import { assets } from "@/assets/assets";
import Card from "./Card";
import CategoryTab from "./CategoryTab";

const BlogList = ({ blogs }) => {
  const [currentTab, setCurrentTab] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const handleTabChange = useCallback(
    (category) => {
      setCurrentTab(category);
      const filteredList = blogs?.filter((blog) =>
        category === "All" ? true : blog.category === category,
      );
      setFilteredBlogs(filteredList);
    },
    [currentTab],
  );

  return (
    <>
      <CategoryTab currentTab={currentTab} onTabChange={handleTabChange} />
      <div className="flex flex-wrap justify-center gap-2 gap-y-10 mb-16 xl:mx-24">
        {filteredBlogs?.map((blog) => (
          <Card
            key={blog._id}
            id={blog._id}
            image={blog.blogImage}
            title={blog.title}
            description={blog.description}
            category={blog.category}
            icon={assets.arrow}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;

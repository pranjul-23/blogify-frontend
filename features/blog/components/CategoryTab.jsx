import { memo } from "react";

const CategoryTab = ({ currentTab, onTabChange }) => {
  return (
    <div className="flex justify-center gap-6 my-10">
      <button
        className={
          currentTab === "All"
            ? "bg-blue-700 text-white py-1 px-4 rounded-sm"
            : ""
        }
        onClick={() => onTabChange("All")}
      >
        All
      </button>
      <button
        className={
          currentTab === "Technology"
            ? "bg-blue-700 text-white py-1 px-4 rounded-sm"
            : ""
        }
        onClick={() => onTabChange("Technology")}
      >
        Technology
      </button>
      <button
        className={
          currentTab === "Startup"
            ? "bg-blue-700 text-white py-1 px-4 rounded-sm"
            : ""
        }
        onClick={() => onTabChange("Startup")}
      >
        Startup
      </button>
      <button
        className={
          currentTab === "Lifestyle"
            ? "bg-blue-700 text-white py-1 px-4 rounded-sm"
            : ""
        }
        onClick={() => onTabChange("Lifestyle")}
      >
        Lifestyle
      </button>
    </div>
  );
};

export default memo(CategoryTab);

"use client";

import { useEffect } from "react";

export const useClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    function handleClickOutside(e) {
      if (!ref.current) {
        return;
      }
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, onClickOutside]);
};

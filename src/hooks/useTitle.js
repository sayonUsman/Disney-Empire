import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    if (title === "Home") {
      document.title = "Disney Empire";
    } else {
      document.title = `Disney Empire | ${title}`;
    }
  }, [title]);
};

export default useTitle;

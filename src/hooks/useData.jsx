import { useEffect, useState } from "react";

const useData = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/coursedata")
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
        setloading(false);
      });
  }, []);
  return [courseData, loading];
};

export default useData;

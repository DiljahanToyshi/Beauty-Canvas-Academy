import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading,setloading] = useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setloading(false);
        console.log(data);
      });
  }, [])
  return [courses,loading];
};

export default useCourses;
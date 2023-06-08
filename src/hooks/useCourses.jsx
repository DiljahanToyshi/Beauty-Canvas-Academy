import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading,setloading] = useState(true)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setloading(false)
        console.log(data);
      });
  }, [])
  return [courses,loading];
};

export default useCourses;
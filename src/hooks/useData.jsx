import { useQuery } from "@tanstack/react-query";

const useData = () => {
  // const [courseData, setCourseData] = useState([]);
  // useEffect(() => {
  //   fetch("https://assignment-12-server-delta-six.vercel.app/coursedata")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCourseData(data);
  //       setloading(false);
  //     });
  // }, []);
  // return [courseData, loading];
  const {
    data: courseData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["courseData"],
    queryFn: async () => {
      const res = await fetch("https://assignment-12-server-delta-six.vercel.app/courseData");
      return res.json();
    },
  });

  return [courseData, loading, refetch];
};

export default useData;

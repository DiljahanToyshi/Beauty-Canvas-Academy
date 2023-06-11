

import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Components/providers/AuthProvider';
 const useCourses = () => {
   const {user} = useContext(AuthContext);
    const { refetch, data: courses = [] ,isLoading:loading} = useQuery({
      queryKey: ["courses", user?.email],
      // enabled: !loading,
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/courses");
       
        return res.json();
      },
    });
    return [courses,loading,refetch]
};

export default useCourses;
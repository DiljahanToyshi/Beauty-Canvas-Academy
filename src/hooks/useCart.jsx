import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Components/providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useCart = () => {
   const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
      queryKey: ["carts", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(
          `carts?email=${user?.email}`
        );
        // console.log("res from axios", res);
        return res.data;
      },
    });
    return [cart,refetch]
};

export default useCart;
 
// update course status

// export const updateStatus = async(id,status) =>{
//   const res = await fetch (
//     `http://localhost:5000/carts/status/${id}`,
//   {
//     method: 'PATCH',
//     headers:{
//       'content-type':'application/json',
//     },
//     body:JSON.stringify({status}),
//   }
//   )

// const data = await res.json();
// return data
// }
import { useNavigation } from 'react-router-dom';
import useCourses from '../../../../hooks/useCourses';
import Container from '../Container';
import Instructor from './Instructor';

const PopularInstructor = () => {
   const [courses] = useCourses();
   const navigation = useNavigation();
   

   return (
     <Container>
       <div className=" my-24">
         <p className="text-5xl font-semibold text-center md:my-6">
          Meet Our Popular Instructors
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
           {courses.slice(0,6).map((course) => (
             <Instructor key={course._id} course={course}></Instructor>
           ))}
         </div>
       </div>
     </Container>
   );
};

export default PopularInstructor;
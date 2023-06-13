import Banner from "../Banner/Banner";
import PopularCourse from "../PopularCourse/PopularCourse";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import ExtraSection from "../Section/ExtraSection";

const Home = () => {
    return (
        <div>
<Banner></Banner>  
<ExtraSection></ExtraSection>
<PopularCourse></PopularCourse>

<PopularInstructor></PopularInstructor>
     </div>
    );
};

export default Home;
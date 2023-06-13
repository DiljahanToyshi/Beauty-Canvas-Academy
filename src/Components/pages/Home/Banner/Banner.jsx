import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../../assets/img1.jpg";
import img2 from "../../../../assets/img2.jpg";
import img3 from "../../../../assets/img3.jpg";
import img4 from "../../../../assets/img4.jpg";
import img5 from "../../../../assets/img5.jpg";
import img6 from "../../../../assets/img6.jpg";


const Banner = () => {
  return (
    <Carousel>
      <div className="h-[804px]">
        <img src={img1} />
        
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 ">
            <div className="text-slate-200 space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                Make Course ' For YourSelf '
              </h2>
              <div className="text-xl shadow-lg font-bold text-slate-600">
                {" "}
                <p>
                  Make Course 'For YourSelf' will help you look at yourself from
                  a new perspective, learn how to emphasize your beauty and
                  skillfully transform daytime makeup into a luxurious evening
                  look!
                </p>
                <p>Sing up before 0.0.2023 and get 30% discount</p>
              </div>
              <div>
                <button className="btn btn-outline  bg-slate-600 btn-sm text-white">
                  Start Learning{" "}
                </button>
              </div>
            </div>
           
          </div>
      </div>
      <div>
        <img src={img2} />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 ">
          <div className="text-slate-200 space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Make Course ' For YourSelf '</h2>
            <div className="text-xl shadow-lg font-bold text-slate-600">
              {" "}
              <p>
                Make Course 'For YourSelf' will help you look at yourself from a
                new perspective, learn how to emphasize your beauty and
                skillfully transform daytime makeup into a luxurious evening
                look!
              </p>
              <p>Sing up before 0.0.2023 and get 30% discount</p>
            </div>
            <div>
              <button className="btn btn-outline  bg-slate-600 btn-sm text-white">
                Start Learning{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={img3} />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 ">
          <div className="text-slate-200 space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Make Course ' For YourSelf '</h2>
            <div className="text-xl shadow-lg font-bold text-slate-600">
              {" "}
              <p>
                Make Course 'For YourSelf' will help you look at yourself from a
                new perspective, learn how to emphasize your beauty and
                skillfully transform daytime makeup into a luxurious evening
                look!
              </p>
              <p>Sing up before 0.0.2023 and get 30% discount</p>
            </div>
            <div>
              <button className="btn btn-outline  bg-slate-600 btn-sm text-white">
                Start Learning{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={img4} />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 ">
          <div className="text-slate-200 space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Make Course ' For YourSelf '</h2>
            <div className="text-xl shadow-lg font-bold text-slate-600">
              {" "}
              <p>
                Make Course 'For YourSelf' will help you look at yourself from a
                new perspective, learn how to emphasize your beauty and
                skillfully transform daytime makeup into a luxurious evening
                look!
              </p>
              <p>Sing up before 0.0.2023 and get 30% discount</p>
            </div>
            <div>
              <button className="btn btn-outline  bg-slate-600 btn-sm text-white">
                Start Learning{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 ">
          <div className="text-slate-200 space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Make Course ' For YourSelf '</h2>
            <div className="text-xl shadow-lg font-bold text-slate-600">
              {" "}
              <p>
                Make Course 'For YourSelf' will help you look at yourself from a
                new perspective, learn how to emphasize your beauty and
                skillfully transform daytime makeup into a luxurious evening
                look!
              </p>
              <p>Sing up before 0.0.2023 and get 30% discount</p>
            </div>
            <div>
              <button className="btn btn-outline  bg-slate-600 btn-sm text-white">
                Start Learning{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;

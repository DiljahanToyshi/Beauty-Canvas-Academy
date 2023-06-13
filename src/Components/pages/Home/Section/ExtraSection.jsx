import { Slide } from "react-awesome-reveal";
import "./section.css"
const ExtraSection = () => {
  return (
    <div className="  h-96 w-full bg-none   ">
      <div className=" rounded-xl flex items-center h-full left-0 top-0 min-h-screen background-img ">
        <Slide direction="up">
          <div className="text-white space-y-7  w-2/5 pl-8">
            <h2 className="text-6xl font-bold">Why Choose Us? </h2>
            <div className="text-base shadow-2xl font-bold text-white bg-blend-overlay">
              {" "}
              <p>
                Our school has been teaching since 2007. This time our team of
                talanted and ambitious teachers put all their knowledge and
                practical experience into creating our unique course programs.
                We provide the opportunity to study both online and offline. On
                the cosmetic table for practical exercise, the best product of
                leading international are presented: MAC, Make Up, Chanel,
                Loreal, Lancome, YSL ...
              </p>
            </div>
            <div>
              <button className="btn btn-outline  bg-slate-600 btn-sm text-white">
                More{" "}
              </button>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ExtraSection;

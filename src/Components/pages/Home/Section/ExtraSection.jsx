import img1 from "../../../../public/school.jpg"
const ExtraSection = () => {
    return (
      <div>
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
      </div>
    );
};

export default ExtraSection;
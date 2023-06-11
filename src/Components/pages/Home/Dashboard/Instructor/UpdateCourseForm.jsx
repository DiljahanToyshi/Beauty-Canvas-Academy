import { TbFidgetSpinner } from 'react-icons/tb';


const UpdateCourseForm = ({
  handleSubmit,

  loading,
  handleImageUpdate,
  courseData,
  setcourseData,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-1 text-sm">
            <label htmlFor="CourseName" className="block text-gray-600">
              Course Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="CourseName"
              value={courseData?.CourseName}
              onChange={(event) =>
                setcourseData({ ...courseData, CourseName: event.target.value })
              }
              id="CourseName"
              type="text"
              placeholder="CourseName"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="studentNumber" className="block text-gray-600">
              Student Number
            </label>
            <input
              value={courseData?.studentNumber}
              onChange={(event) =>
                setcourseData({
                  ...courseData,
                  studentNumber: event.target.value,
                })
              }
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="studentNumber"
              id="studentNumber"
              type="text"
              placeholder="Student Number"
              required
            />
          </div>

          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    onChange={(event) => {
                      handleImageUpdate(event.target.files[0]);
                    }}
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="courseImg"
                    id="courseImg"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                    Upload Image
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                value={courseData?.price}
                onChange={(event) =>
                  setcourseData({ ...courseData, price: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="price"
                id="price"
                type="number"
                placeholder="Price"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="guest" className="block text-gray-600">
                Duration
              </label>
              <input
                value={courseData?.duration}
                onChange={(event) =>
                  setcourseData({ ...courseData, duration: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="duration"
                id="duration"
                type="number"
                placeholder="duration"
                required
              />
            </div>
          </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms" className="block text-gray-600">
                availableSeats
              </label>
              <input
                value={courseData?.availableSeats}
                onChange={(event) =>
                  setcourseData({
                    ...courseData,
                    availableSeats: event.target.value,
                  })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="availableSeats"
                id="availableSeats"
                type="number"
                placeholder="Available Seats"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                value={courseData?.description}
                onChange={(event) =>
                  setcourseData({
                    ...courseData,
                    description: event.target.value,
                  })
                }
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="description"
              ></textarea>
            </div>
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateCourseForm
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { toast } from 'react-hot-toast'
import { newCourse } from '../../../../api/course';
import UpdateCourseForm from './UpdateCourseForm';
const UpdateModal = ({ closeModal, isOpen, refetch, course, id }) => {
    
  const [loading, setLoading] = useState(false);

  const [courseData, setcourseData] = useState(course);

  const handleImageUpdate = (image) => {
    setLoading(true);
    const imageUpload = async image => {
  const formData = new FormData()
  formData.append('image', image)
  const url = `https://api.imgbb.com/1/upload?key=${
   import.meta.env.VITE_Image_Upload_token
  }`
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      setcourseData({ ...courseData, image: res.data.display_url });
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  };
}

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(courseData);
    const updatedData = Object.assign({}, { ...courseData });
    delete updatedData._id;
    setLoading(true);
    newCourse(updatedData, id)
      .then((data) => {
        console.log(data);
        toast.success("Course info updated");
        setLoading(false);
        refetch();
        closeModal(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => closeModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update Room Info
                </Dialog.Title>
                <div className="mt-2 w-full">
                  <UpdateCourseForm
                    handleSubmit={handleSubmit}
                    courseData={courseData}
                    setcourseData={setcourseData}
                    handleImageUpdate={handleImageUpdate}
                    loading={loading}
                  /> 
                </div>
                <hr className="mt-8 " />
                <div className="mt-2 ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => closeModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      
      </Dialog>
    </Transition>
  );
};

export default UpdateModal
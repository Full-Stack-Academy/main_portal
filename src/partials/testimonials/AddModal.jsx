import axios from "axios";
import { useState } from "react";

const AddModal = ({ dis, setDis }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState(0);
  const [priority, setPriority] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;

  const addTest = () => {
    setSubmit(true);
    const test = {
      name,
      desc,
      rating,
      priority,
      image,
    };
    const fd = new FormData();

    for (let key in test) {
      fd.append(key, test[key]);
    }
    axios
      .post(`${baseUrl}api/test/create`, fd)
      .then(() => {
        setSubmit(false);
        setDis(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className={`${
          dis ? null : "hidden"
        } transition-all ease-in-out fixed top-0 bg-gray-600 bg-opacity-80 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 items-center h-full max-h-full`}
      >
        <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md max-h-full transition-all">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setDis(false)}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add A New Testimonial</h3>
              <form className="space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Student Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <textarea
                    placeholder="Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    rows={7}
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">
                  Student Image (250px x 250px)
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="multiple_files"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="rating">
                  Rating
                </label>
                <select
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  id="rating"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Rating</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="rating">
                  Priority
                </label>
                <select
                  onChange={(e) => setPriority(e.target.value)}
                  value={priority}
                  id="priority"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Rating</option>
                  <option value={2} className="bg-red-100 text-red-800">
                    High
                  </option>
                  <option value={1} className="bg-yellow-300 text-yellow-800">
                    Medium
                  </option>
                  <option value={0} className="bg-green-100 text-green-800">
                    Low
                  </option>
                </select>
              </form>
              <button
                onClick={addTest}
                type="submit"
                class="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {submit && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;

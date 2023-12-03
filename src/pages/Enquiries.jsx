import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import AddModal from "../partials/placement/AddModal";
import Banner from "../partials/Banner";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import EditModal from "../partials/placement/EditModal";

const Enquiries = () => {
  const [form, setForm] = useState([]);
  const [addDis, setAddDis] = useState(false);
  const [editDis, setEditDis] = useState(false);
  const [testS, setTestS] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;

  const fetchData = () => {
    setForm([]);
    axios
      .get(`${baseUrl}api/forms/`)
      .then((res) => {
        setForm(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openEdit = (dt) => {
    setTestS(dt);
    setEditDis(true);
  };

  let status = [
    { title: "NA", color: "text-gray-100" },
    { title: "Not Decided", color: "text-blue-800" },
    { title: "Not Interested", color: "text-red-800" },
    { title: "Will be attending demo", color: "text-yellow-800" },
    { title: "Scholarship/Zakat Eligible", color: "text-pink-800" },
    { title: "Attended Demo Class", color: "text-purple-800" },
    { title: "Enrolled", color: "text-green-800" },
    { title: "Placement Done", color: "text-indigo-800" },
  ];

  return (
    <>
      {/* {addDis && <AddModal dis={addDis} setDis={setAddDis} />}
      {editDis && <EditModal dis={editDis} setDis={setEditDis} data={testS} />} */}
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Dashboard actions */}
          <div className="sm:flex sm:justify-between sm:items-center mb-4">
            {/* Left: Avatars */}
            {/* <DashboardAvatars /> */}
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-2">Leads ({form.length})</h2>

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Filter button */}
              {/* <FilterButton /> */}
              {/* Datepicker built with flatpickr */}
              {/* <Datepicker /> */}
              {/* Add view button */}
              {/* <button onClick={() => setAddDis(true)} className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Add New</span>
              </button> */}
              <button onClick={fetchData} className="btn bg-indigo-700 hover:bg-indigo-500 text-white">
                <svg
                  fill="#fff"
                  className="w-4 h-4"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 489.645 489.645"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3
		c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5
		c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8
		c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2
		C414.856,432.511,548.256,314.811,460.656,132.911z"
                    />
                  </g>
                </svg>
                <span className="hidden xs:block ml-2">Refresh</span>
              </button>
            </div>
          </div>

          {/* Cards */}
          {/* <div classNameName="flex w-full"> */}
          <div className="relative sm:rounded-lg overflow-x-auto shadow-md py-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 rounded dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Mobile
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Branch
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Course(s) Interested
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Latest Contact
                  </th>
                  <th scope="col" className="px-2 py-3">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {form &&
                  form.map((data, key) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700" key={key}>
                      <td className="px-2 text-center py-4">{key + 1}</td>
                      <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {data.name}
                      </th>
                      <td className="px-2 py-4">{data.phone}</td>
                      <td className={`px-4 py-4 font-bold ${status[data?.status]?.color}`}>{status[data?.status]?.title}</td>
                      <td className="px-6 py-4">{data.leadBranch.name.split("-")[1]}</td>
                      <td className="px-2 py-4 flex flex-wrap gap-2">
                        {data.interestedCourse.map((dt, i) => (
                          <span class="bg-blue-600 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded" key={i}>
                            {dt.name}
                          </span>
                        ))}
                      </td>
                      <td className="px-4 py-4">{moment(data.updatedAt).format("lll")}</td>
                      <td className="px-2 py-4">
                        <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => openEdit(data)}>
                          View
                        </span>
                      </td>
                    </tr>
                  ))}
                {!form.length && (
                  <tr className="justify-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-8 p-4">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">{form.length}</span>
              </span>
              <ul className="inline-flex -space-x-px text-sm h-8">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
          {/* </div> */}
        </div>
      </main>
    </>
  );
};

export default Enquiries;

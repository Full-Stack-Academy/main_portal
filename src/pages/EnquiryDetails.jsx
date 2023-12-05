import { useParams } from "react-router-dom";

const EnquiryDetails = () => {
  const params = useParams();

  return (
    <>
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Dashboard actions */}
          <div className="sm:flex sm:justify-between sm:items-center mb-4">
            {/* Left: Avatars */}
            {/* <DashboardAvatars /> */}
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Lead Detail ({params.id})
            </h2>
            <button
              onClick={() => console.log("Edit")}
              className="btn bg-indigo-700 hover:bg-indigo-500 text-white"
            >
              Edit
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default EnquiryDetails;

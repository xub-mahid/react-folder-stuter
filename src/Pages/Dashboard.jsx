const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          📊 Dashboard
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          + Add New
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-sm sm:text-lg font-semibold text-gray-600">
            Users
          </h2>
          <p className="text-2xl sm:text-3xl font-bold mt-2">
            1,250
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-sm sm:text-lg font-semibold text-gray-600">
            Sales
          </h2>
          <p className="text-2xl sm:text-3xl font-bold mt-2">
            $8,430
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-sm sm:text-lg font-semibold text-gray-600">
            Orders
          </h2>
          <p className="text-2xl sm:text-3xl font-bold mt-2">
            320
          </p>
        </div>

      </div>

      {/* Extra Section (Stats + Activity) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
            <li className="flex justify-between">
              <span>✅ New user registered</span>
              <span className="text-gray-400 text-xs">2 min ago</span>
            </li>

            <li className="flex justify-between">
              <span>💰 Payment received</span>
              <span className="text-gray-400 text-xs">10 min ago</span>
            </li>

            <li className="flex justify-between">
              <span>📦 Order shipped</span>
              <span className="text-gray-400 text-xs">1 hour ago</span>
            </li>
          </ul>
        </div>

        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Quick Stats
          </h2>

          <div className="space-y-4">

            <div>
              <p className="text-sm text-gray-600">Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600">Target</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-green-500 h-2 rounded-full w-[50%]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
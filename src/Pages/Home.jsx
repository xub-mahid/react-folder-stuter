const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to My Website
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          It's a test project to learn React deeply and build modern web applications.
        </p>

        <button className="bg-white text-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="px-4 sm:px-6 md:px-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Fast</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Lightning fast performance with React
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Design</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Beautiful UI with Tailwind CSS
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Secure</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Safe and secure applications
            </p>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 pb-10 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Ready to start your journey?
        </h2>

        <button className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:bg-blue-700 transition">
          Explore Now
        </button>
      </div>

    </div>
  );
};

export default Home;
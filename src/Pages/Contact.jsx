const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Contact Me
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Have any questions or want to work with me? Feel free to reach out.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left: Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Send Message
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-center">
          
          <h2 className="text-xl font-semibold mb-4">
            Contact Information
          </h2>

          <p className="mb-4 text-sm sm:text-base">
            You can reach me directly through the following details:
          </p>

          <div className="space-y-3 text-sm sm:text-base">
            <p>📞 01891500704</p>
            <p>📧 mahid181920@gmail.com</p>
            <p>📍 Bangladesh</p>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-3 flex-wrap">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/mohammad.mahid.5815"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
            >
              Facebook
            </a>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
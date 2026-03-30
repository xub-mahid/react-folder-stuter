import img  from "../assets/inggg.svg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8">

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">

          {/* Image */}
          <div className="w-32 h-32 rounded-full  bg-black flex items-center justify-center text-xl font-bold">
            <img src={img } alt="hero" className="w-20 h-20 rounded-full object-fill   bg-black" />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Mohammed Mahid
            </h1>

            <p className="text-gray-600 mt-2">
              Frontend Developer (React, Tailwind CSS)
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Working at RFL Pran Group (MIS)
            </p>
          </div>

        </div>

        {/* About Text */}
        <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
          Hello! I am a passionate Frontend Developer who loves building modern,
          responsive and user-friendly web applications using React, Tailwind CSS,
          and JavaScript. Currently, I am focusing on becoming a production-level
          frontend developer and improving my real-world project skills.
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Skills */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              Skills
            </h2>

            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
              <li>HTML, CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React JS</li>
              <li>Next.js (Learning)</li>
              <li>Tailwind CSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              Experience
            </h2>

            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Working at <span className="font-medium">RFL Pran Group</span> as MIS.
            </p>

            <p className="text-gray-600 text-sm sm:text-base">
              Building real-world projects and continuously improving frontend skills.
            </p>
          </div>

        </div>

        {/* Contact */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
            Contact Information
          </h2>

          <div className="text-gray-600 space-y-1 text-sm sm:text-base">
            <p>📞 01891500704</p>
            <p>📧 mahid181920@gmail.com</p>
          </div>
        </div>

        {/* Social */}
        <div className="mt-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
            Connect with Me
          </h2>

          <div className="flex flex-wrap gap-3">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition text-sm"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/mohammad.mahid.5815"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
            >
              Facebook
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
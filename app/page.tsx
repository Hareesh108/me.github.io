export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Container for max-width */}
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {/* Header Section */}
        <header className="bg-yellow-500 w-full py-6 shadow-lg text-center">
          <h1 className="text-4xl font-bold text-gray-900">Hareesh Bhittam</h1>
          <p className="text-lg text-gray-800">
            Full-Stack Developer | React | TypeScript | Java | Spring Boot
          </p>
        </header>

        {/* About Section */}
        <section className="flex flex-col items-center py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-700">
            I am a passionate full-stack developer with expertise in building
            dynamic, responsive applications using modern frameworks and
            technologies. My experience spans across frontend technologies like
            React and TypeScript, as well as backend services with Java and
            Spring Boot.
          </p>
        </section>

        {/* Skills Section */}
        <section className="w-full py-16 bg-gray-200">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
              <span className="px-6 py-3 bg-white shadow-md text-gray-800 font-medium rounded">
                React
              </span>
              <span className="px-6 py-3 bg-white shadow-md text-gray-800 font-medium rounded">
                TypeScript
              </span>
              <span className="px-6 py-3 bg-white shadow-md text-gray-800 font-medium rounded">
                Java
              </span>
              <span className="px-6 py-3 bg-white shadow-md text-gray-800 font-medium rounded">
                Spring Boot
              </span>
              <span className="px-6 py-3 bg-white shadow-md text-gray-800 font-medium rounded">
                Tailwind CSS
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex flex-col items-center py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-gray-700">
            Interested in working together or have a question? Feel free to
            reach out!
          </p>
          <a
            href="mailto:your-email@example.com"
            className="mt-6 px-8 py-3 bg-yellow-500 text-white font-medium rounded shadow hover:bg-yellow-600 transition duration-300"
          >
            Contact Me
          </a>
        </section>

        {/* Footer */}
        <footer className="w-full py-4 bg-gray-900 text-center text-gray-300">
          © 2024 Hareesh Bhittam
        </footer>
      </div>
    </div>
  );
}

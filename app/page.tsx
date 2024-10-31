import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center min-h-screen max-w-screen-xl mx-auto">
        <div className="relative flex justify-center">
          <Image
            src="/profile/harsh01.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-lg border-4 border-primary shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-2 md:items-start">
          <h1 className="text-6xl font-bold">Hi! I&apos;m Hareesh.</h1>
          <h4 className="text-xl">
            Creating a brighter tomorrow with technology and innovation.
          </h4>
          <p>
            I am a passionate full-stack developer with expertise in building
            dynamic, responsive applications using modern frameworks and
            technologies. My experience spans across frontend technologies like
            React and TypeScript, as well as backend services with Java and
            Spring Boot.
          </p>
          <p className="text-lg">
            Full-Stack Developer | React | TypeScript | Java | Spring Boot
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start">
        {/* Container for max-width */}
        <div className="w-full max-w-screen-xl mx-auto ">
          {/* Skills Section */}
          <section
            className="w-full py-16"
            style={{
              backgroundColor: "hsl(var(--card))",
              color: "hsl(var(--card-foreground))",
            }}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-8">Skills</h2>
              <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
                <span
                  className="px-6 py-3 shadow-md font-medium rounded"
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  React
                </span>
                <span
                  className="px-6 py-3 shadow-md font-medium rounded"
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  TypeScript
                </span>
                <span
                  className="px-6 py-3 shadow-md font-medium rounded"
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  Java
                </span>
                <span
                  className="px-6 py-3 shadow-md font-medium rounded"
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  Spring Boot
                </span>
                <span
                  className="px-6 py-3 shadow-md font-medium rounded"
                  style={{
                    backgroundColor: "hsl(var(--accent))",
                    color: "hsl(var(--accent-foreground))",
                  }}
                >
                  Tailwind CSS
                </span>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="flex flex-col items-center py-16 px-6 text-center">
            <h2
              className="text-3xl font-semibold"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Get in Touch
            </h2>
            <p
              className="mt-4"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Interested in working together or have a question? Feel free to
              reach out!
            </p>
            <a
              href="mailto:hareeshbhittam@email.com"
              className="mt-6 px-8 py-3 font-medium rounded shadow transition duration-300"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
              }}
            >
              Contact Me
            </a>
          </section>

          {/* Footer */}
          <footer
            className="w-full py-4 text-center"
            style={{
              backgroundColor: "hsl(var(--background))",
              color: "hsl(var(--foreground))",
            }}
          >
            © 2024 Hareesh Bhittam
          </footer>
        </div>
      </div>
    </>
  );
}

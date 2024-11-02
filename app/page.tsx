import LandingPage from "@/components/landing-page";
import ProjectPage from "@/components/project";
import WorkPage from "@/components/work";

export default function Home() {
  return (
    <>
      <LandingPage />

      <ProjectPage />

      <WorkPage />

      <div className="flex flex-col items-start justify-start">
        {/* Container for max-width */}
        <div className="w-full max-w-screen-xl mx-auto ">
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

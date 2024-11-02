import React from "react";

export default function WorkPage() {
  return (
    <div className="max-w-screen-xl mx-auto mt-6 md:mt-10">
      <div
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
      </div>
    </div>
  );
}

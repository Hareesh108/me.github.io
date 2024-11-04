import React from "react";
import { Button } from "../ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-screen-xl mt-6 md:mt-10 mb-5 mx-4 md:mx-auto">
      <div className="flex flex-col items-center py-16 px-6 text-center">
        <h2
          className="text-3xl font-semibold"
          style={{ color: "hsl(var(--foreground))" }}
        >
          Get in Touch
        </h2>
        <p className="mt-4">
          Interested in working together or have a question? Feel free to reach
          out!
        </p>
        <a href="mailto:hareeshbhittam@email.com">
          <Button className="w-32 font-bold mt-5"> Contact Me</Button>
        </a>
      </div>
    </div>
  );
}

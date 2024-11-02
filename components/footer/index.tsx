import React from "react";

export default function Footer() {
  return (
    <div className="max-w-screen-xl mt-6 md:mt-10 mb-5 mx-4 md:mx-auto">
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
  );
}
